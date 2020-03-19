
const mongoose = require('mongoose');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client();

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
function user_authorize(param = {}, callback) {
    var user_id = param.user_id;
    var id_token = param.id_token;
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: "1067954689582-h93drh2hiqshr8l0vvu73itqsnk1ceuo.apps.googleusercontent.com"
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        //const domain = payload['hd'];
        //console.log(payload);

        if (payload.sub == user_id) {
            callback(true);
        } else {
            callback(false);
        }
    }
    verify().catch(function() {
        callback(false);
    });
}

module.exports = {
    user_data_get: user_data_get,
    user_data_set: user_data_set,
    user_authorize: user_authorize
}