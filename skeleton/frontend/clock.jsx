import React from 'react';
import Weather from './weather.jsx';
import AutoComplete from './autocomplete.jsx';
import Tab from './tab.jsx';

const MONTHS = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

const DAYS = {
  0: "Sunday",
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday"
};

class Clock extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
    this.hours = this.setHours;
    this.minutes = this.setMinutes;
    this.seconds = this.setSeconds;
    this.date = this.setDate;
  }


  setDate() {
    let day = DAYS[this.state.time.getDay()];
    let month = MONTHS[this.state.time.getMonth()];
    let year = this.state.time.getFullYear();
    let date = this.state.time.getDate();

    return `${day} ${month} ${date} ${year}`;
  }

  setHours() {
    let hours = this.state.time.getHours();
    if (hours < 10) {
      return "0" + hours;
    }
    return hours;
  }

  setMinutes() {
    let minutes = this.state.time.getMinutes();
    if (minutes < 10) {
      return "0" + minutes;
    }
    return minutes;
  }

  setSeconds() {
    let seconds = this.state.time.getSeconds();
    if (seconds < 10) {
      return "0" + seconds;
    }
    return seconds;
  }


  tick() {
    this.setState({ time: new Date() });
  }

  componentDidMount() {
    this.handle = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.handle);
  }

  render() {
    return (
      <div>
        <h1>Clock</h1>
        <div className="clock">
          <ul>
            <li>
              <span>Date</span>
              <h4>{this.date()}</h4>
            </li>
            <li>
              <span>Time</span>
              <h4>{this.hours()}:{this.minutes()}:{this.seconds()}</h4>
            </li>
          </ul>
        </div>
        <h1>Weather</h1>
        <Weather />

        <div className="box">
          <h1>AutoComplete</h1>
          <AutoComplete />
        </div>

        <Tab />

      </div>
    );
  }
}

export default Clock;
