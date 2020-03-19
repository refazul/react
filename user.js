
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
async function user_authorized_is_google(param = {}) {
    var user_id = param.user_id;
    var id_token = param.id_token;

    try {
        const ticket = await client.verifyIdToken({
            idToken: id_token,
            audience: "117738736195-o3lbfnbj4fj3689ggeec0u5o2lqqkko9.apps.googleusercontent.com"
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        // If request specified a G Suite domain:
        //const domain = payload['hd'];
        if (payload.sub == user_id) {
            return true;
        }
    } catch(e) {
        return false;
    }
    return false;
}
function user_authorized_is(param = {}, callback) {
    var user_id = param.user_id;
    var id_token = param.id_token;

    user_authorized_is_google({ user_id, id_token }).then(function (user_authorized_is) {
        callback(user_authorized_is);
    });
}

module.exports = {
    user_data_get: user_data_get,
    user_data_set: user_data_set,
    user_authorized_is: user_authorized_is
}