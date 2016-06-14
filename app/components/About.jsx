var React = require('react')

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <h3 className="text-center">Welcome to the React Weather App!</h3>
      <p>
        This app was created from Andrew Mead&#39;s <a href="http://www.udemy.com/the-complete-react-web-app-developer-course/" target="_blank">The Complete React Web App Developer Course</a> on Udemy. You can find out more about React <a href="http://facebook.github.io/react/" target="_blank">here</a>. Want to see the source code? Just head on over to my <a href="http://github.com/toddseller/ReactWeather" target="_blank">GitHub</a> repository!
      </p>
    </div>
  )
}

module.exports = About