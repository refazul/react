import axios from 'axios';

export function user_get(param = {}, callback) {
    var user_id = param.user_id;
    var user_token = param.user_token;

    axios({
        method: 'get',
        url: '/user/' + user_id,
        data: {},
        headers: { 'authorization': user_token },
    }).then((user) => {
        if (user && user.data) {
            user = user.data;
            callback(user);
        }
    })
}
export function user_set(param = {}, callback) {
    var user_id = param.user_id;
    var user_token = param.user_token;
    var data = param.data;
    axios({
        method: 'post',
        url: '/user/' + user_id,
        data: {data: data},
        headers: { 'authorization': user_token },
        
    }).then((user) => {
        if (user && user.data) {
            user = user.data;
            callback(user);
        }
    })
}
