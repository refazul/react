
const mongoose = require('mongoose');

var CauseSchema = new mongoose.Schema({
    case_number: String,
    case_type: String,
    case_date: String,
    court_name: String,
    judge_name: String,
    category: String,
    parties: String,
});
var Cause = mongoose.model('Cause', CauseSchema);

function cause_search(param = {}, callback) {
    Cause.find(param, function(err, data) {
        callback(data);
    });
}
function cause_data_get(param = {}, callback) {
    Cause.findOne({ case_number: param.case_number }, function (err, data) {
        //callback(data);
    });
}
function cause_data_set(param = {}) {
    return new Promise((resolve, reject) => {
        Cause.find({ case_number: param.case_number, case_type: param.case_type }, function (err, data) {
            if (data.length > 0) {
                // Exists Already
                Cause.findOneAndUpdate({ case_number: param.case_number, case_type: param.case_type }, param, { new: true }, function (err, doc) {
                    resolve(doc);
                });
            } else {
                var case_number = param.case_number;
                var case_type = param.case_type || '';
                var case_date = param.case_date || '';
                var court_name = param.court_name || '';
                var judge_name = param.judge_name || '';
                var category = param.category || '';
                var parties = param.parties || '';
                // New User
                var u = new Cause({ case_number, case_type, case_date, court_name, judge_name, category, parties });
                u.save(function (err, data) {
                    resolve(data);
                });
            }
        });
    });
}
module.exports = {
    cause_search: cause_search,
    cause_data_get: cause_data_get,
    cause_data_set: cause_data_set,
}