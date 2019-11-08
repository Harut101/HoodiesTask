import axios from 'axios';

export function customRequest (url, method, sendData) {
    return new Promise((resolve, reject) => {
        axios[method](url, sendData).then((response) => {
            
            let { data } = response;
            resolve(data)
        })
        .catch(err => reject(err))
    })
}