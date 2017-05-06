import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
    this.state = { city: "", temp: ""};
  }

  componentDidMount() {
    this.getLocation();
    this.handle = setInterval(this.getLocation.bind(this), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(pos => this.getXML(pos));

  }

  getXML(pos) {
    let weather = this;
    let request = new XMLHttpRequest();
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    request.open('GET', `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=591e1df910dbfae294de6ac290a8d2e2`, true);

    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        weather.setInfo(JSON.parse(request.responseText));
      }
    };
    request.send();
  }

  setInfo(response) {
    let city = response.name;
    let temp = Math.round(((response.main.temp - 273.15) * (1.8) + 32) * 10) / 10;
    this.setState({ city: city, temp: temp});
  }

  render() {
    return (
      <div className="clock blue">
        <ul>
          <li>
            <h4>{this.state.city}</h4>
          </li>
          <li>
            <h4>{this.state.temp}  °F</h4>
          </li>
        </ul>
      </div>
    );
  }
}

export default Weather;

// http://api.openweathermap.org/data/2.5/weather?q=Tokyo,jp&appid=591e1df910dbfae294de6ac290a8d2e2
