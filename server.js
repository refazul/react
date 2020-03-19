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

var court_scan = require('./crawler').court_scan;
const cause_data_get = require('./cause').cause_data_get;
const cause_data_set = require('./cause').cause_data_set;

app.get('/slick', function (req, res) {
    res.render('slick', { title: 'Slick Carousel', message: 'Slick Carousel' })
})
app.get('/law', function (req, res) {
    court_scan({ date: '03/03/2020' }).then((values) => {
        res.render('home', { title: 'Law Companion Draft', cause_data: JSON.stringify(values) })
    })
})
app.get('/cause', function (req, res) {
    var param = {
        number: req.param('number')
    }
    cause_data_get(param, function(data) {
        // After get
        res.json(data)
    });
  })
app.post('/cause', function (req, res) {
    var param = {
        number: req.body.number
    }
    cause_data_set(param, function(data) {
        // After save
        res.json(data)
    });
})
app.get('*', function (req, res) {
    res.render('home', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

