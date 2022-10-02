const axios = require('axios')

const request = axios.create({
    baseURL: 'http://challenge.robocontest.uz/api'
})

export default request;
