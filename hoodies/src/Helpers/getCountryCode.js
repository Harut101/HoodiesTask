import axios from 'axios';

export function getCountryCode () {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(function(position) {
            axios.get('https://ipapi.co/country_calling_code/')
            .then((response) => {
              let { data } = response;
              resolve(data)

           }).catch(err => reject(err))
       })
    })
}