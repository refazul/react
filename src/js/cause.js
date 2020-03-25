import axios from 'axios';

export function cause_search(param = {}) {
    return new Promise((resolve, reject) => {
        var case_numbers = param.case_numbers;

        axios({
            method: 'post',
            url: '/search',
            data: {case_numbers},
        }).then((results) => {
            resolve(results.data);
        })
    })
}
