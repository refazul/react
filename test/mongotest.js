const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true, useUnifiedTopology: true });

var db = mongoose.connection;
var kittySchema = new mongoose.Schema({
    name: String
});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('connected')
    var Kitten = mongoose.model('Kitten', kittySchema);

    var fluffy = new Kitten({ name: 'fluffy' });
    fluffy.save(function (err, fluffy) {
        if (err) return console.error(err);
        Kitten.find(function (err, kittens) {
            if (err) return console.error(err);
            console.log(kittens);
            // #### mongo commands
            // show dbs
            // show collections
            // db.kittens.find() -> prints all kittens
        })
    });
});
