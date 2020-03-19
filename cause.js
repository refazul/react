
const mongoose = require('mongoose');

var CauseSchema = new mongoose.Schema({
    number: String
});
var Cause = mongoose.model('Cause', CauseSchema);

function cause_data_get() {
}
function cause_data_set(param = {}, callback) {
    var c = new Cause({ number: param.number });
    c.save(function (err, data) {
        callback(data);
    });
}

module.exports = {
    cause_data_get: cause_data_get,
    cause_data_set: cause_data_set
}