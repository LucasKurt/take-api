const axios = require('axios')

const url = axios.create({
  baseURL: 'https://api.github.com/users/defunkt'
})

module.exports = url