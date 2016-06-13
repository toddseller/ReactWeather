var axios = require('axios')

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=374fd27ac243ac0e7ed866adf70931d3&units=imperial'

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location)
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`
    var updates = {}

    return axios.get(requestUrl).then(function (res) {
      // debugger
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message)
      } else {
        updates.temp = parseFloat(res.data.main.temp.toFixed(0))
        updates.max = parseFloat(res.data.main.temp_max.toFixed(0))
        return updates
      }
    }, function (res) {
      throw new Error(res.data.message)
    })
  }
}