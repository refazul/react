const express = require('express')
const app = express()
const port = 8080

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static('public'))
app.set('view engine', 'pug')
app.set('views', './views')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
global.db = db;

var court_scan = require('./src/nodejs/crawler').court_scan;
const cause_data_get = require('./model/cause').cause_data_get;
const cause_data_set = require('./model/cause').cause_data_set;
const user_data_get = require('./model/user').user_data_get;
const user_data_set = require('./model/user').user_data_set;
const user_authorized_is = require('./model/user').user_authorized_is;

app.get('/slick', function (req, res) {
    res.render('slick', { title: 'Slick Carousel', message: 'Slick Carousel' })
})
app.get('/law', function (req, res) {
    court_scan({ date: '03/03/2020' }).then((values) => {
        res.render('home', { title: 'Law Companion Draft', cause_data: JSON.stringify(values) })
    })
})
app.get('/cause/:number', function (req, res) {
    var param = {
        number: req.params.number
    }
    cause_data_get(param, function (data) {
        // After get
        res.json(data)
    });
})
app.post('/cause', function (req, res) {
    var param = {
        number: req.body.number
    }
    cause_data_set(param, function (data) {
        // After save
        res.json(data)
    });
});
app.get('/', function (req, res) {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
})

app.use(function (req, res, next) {
    if (!req.headers.authorization) {
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
});
app.post('/user/:user_id', function (req, res) {
    var id_token = req.headers.authorization;
    
    var user_id = req.params.user_id;
    var data = req.body.data;

    // Verify with google
    // If verified, we will get an id -> sub. It must match with user_id
    user_authorized_is({ user_id, id_token }, function (user_authorized_is) {
        if (user_authorized_is) {
            // After match
            var param = {
                user_id: user_id,
                data: data
            }
            user_data_set(param, function (data) {
                // After save
                res.json(data)
            });
        } else {
            res.json({ error: 'unauthorized' })
        }
    })

})
app.get('/user/:user_id', function (req, res) {
    var id_token = req.headers.authorization;

    var user_id = req.params.user_id;

    user_authorized_is({ user_id, id_token }, function (user_authorized_is) {
        if (user_authorized_is) {
            // After match
            var param = {
                user_id: user_id
            }
            user_data_get(param, function (data) {
                // After get
                res.json(data)
            });
        } else {
            res.json({ error: 'unauthorized' })
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

