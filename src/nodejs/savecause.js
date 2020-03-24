
var court_scan = require('./crawler').court_scan;
const cause_data_get = require('../../model/cause').cause_data_get;
const cause_data_set = require('../../model/cause').cause_data_set;

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
global.db = db;

court_scan({ date: '03/03/2020' }).then((values) => {
    console.log(values.length);
    //res.render('home', { title: 'Law Companion Draft', cause_data: JSON.stringify(values) })
    var promises = [];
    for (var i = 0; i < values.length; i++) {
        promises.push(cause_data_set(values[i]));
    }
    console.log(promises.length);
    Promise.all(promises).then((values) => {
        console.log('Finished');
        db.close();
    });
})