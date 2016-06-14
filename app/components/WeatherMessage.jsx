var React = require('react')

var WeatherMessage = ({location, temp, max}) => {
  return (
    <h3 className="text-center">It is currently {temp}&deg; in {location}, with a high of {max}&deg; today.</h3>
  )
}

module.exports = WeatherMessage