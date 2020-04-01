import axios from 'axios';

export function cause_search(param = {}) {
    return new Promise((resolve, reject) => {
        axios({
            method: 'post',
            url: '/search',
            data: param,
        }).then((results) => {
            resolve(results.data);
        })
    })
}
