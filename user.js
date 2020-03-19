
const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    user_id: String,
    data: String
});
var User = mongoose.model('user', UserSchema);

function user_data_get(param = {}, callback) {
    User.find({ user_id: param.user_id }, function (err, data) {
        callback(data);
    });
}
function user_data_set(param = {}, callback) {
    User.find({ user_id: param.user_id }, function (err, data) {
        if (data.length > 0) {
            // Exists Already
            User.findOneAndUpdate({ user_id: param.user_id }, { data: param.data }, { new: true }, function (err, doc) {
                callback(doc);
            });
        } else {
            // New User
            var u = new User({ user_id: param.user_id, data: param.data });
            u.save(function (err, data) {
                callback(data);
            });
        }
    });
}

module.exports = {
    user_data_get: user_data_get,
    user_data_set: user_data_set
}