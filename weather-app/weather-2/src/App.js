import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';
import Homepage from './Homepage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currently: {},
      daily: [],
      changeComp: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      text: event.target.value //setting input to a state, so it can keep being updated
    });
  }

  //UNIX time converter
  timeConverter(UNIX_timestamp) {
    let a = new Date(UNIX_timestamp * 1000);
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let month = months[a.getMonth()];
    let date = a.getDate();
    let time = month + ' ' + date;
    return time;
  }
  toCelsius(f) {
    return Math.floor((5 / 9) * (f - 32));
  }

  handleSubmit(event) {
    event.preventDefault(); //prevents page from reloading
    // console.log('You typed: ' + this.state.text); //console.log to test

    axios.post('http://localhost:8080/', this.state)
      .then(res => {
        // console.log(res.data)
        this.setState({
          changeComp: true,
          currently: {
            city: this.state.text,
            currentTemp: this.toCelsius(res.data.currently.temperature),
            precipIntense: res.data.currently.precipIntensity,
            precipChance: res.data.currently.precipProbability,
            date: this.timeConverter(res.data.currently.time),
            uvIndex: res.data.currently.uvIndex,
            icon: res.data.currently.icon
          },
          daily: [
            {
              date: this.timeConverter(res.data.daily.data[1].time),
              icon: res.data.daily.data[1].icon,
              tempMax: this.toCelsius(res.data.daily.data[1].temperatureMax),
              precipChance: res.data.daily.data[1].precipProbability
            },
            {
              date: this.timeConverter(res.data.daily.data[2].time),
              icon: res.data.daily.data[2].icon,
              tempMax: this.toCelsius(res.data.daily.data[2].temperatureMax),
              precipChance: res.data.daily.data[2].precipProbability
            },
            {
              date: this.timeConverter(res.data.daily.data[3].time),
              icon: res.data.daily.data[3].icon,
              tempMax: this.toCelsius(res.data.daily.data[3].temperatureMax),
              precipChance: res.data.daily.data[3].precipProbability
            },
            {
              date: this.timeConverter(res.data.daily.data[4].time),
              icon: res.data.daily.data[4].icon,
              tempMax: this.toCelsius(res.data.daily.data[4].temperatureMax),
              precipChance: res.data.daily.data[4].precipProbability
            },
            {
              date: this.timeConverter(res.data.daily.data[5].time),
              icon: res.data.daily.data[5].icon,
              tempMax: this.toCelsius(res.data.daily.data[5].temperatureMax),
              precipChance: res.data.daily.data[5].precipProbability
            },
            {
              date: this.timeConverter(res.data.daily.data[6].time),
              icon: res.data.daily.data[6].icon,
              tempMax: this.toCelsius(res.data.daily.data[6].temperatureMax),
              precipChance: res.data.daily.data[6].precipProbability
            },
            {
              date: this.timeConverter(res.data.daily.data[7].time),
              icon: res.data.daily.data[7].icon,
              tempMax: this.toCelsius(res.data.daily.data[7].temperatureMax),
              precipChance: res.data.daily.data[7].precipProbability
            }
          ]

        })
      })
  }


  render() {


    return (
      <div>
      <h1>Weather App</h1>
      <form onSubmit={this.handleSubmit} >
        <div className="input-group">
          <label>Search a City:</label>
          <input type="text" ref="form" onChange={this.handleChange} value={this.state.text} className="form-control" required />
          <span className="input-group-btn">
            <button type="submit" value="Submit" className="btn btn-primary"> Search</button>
          </span>
        </div>
      </form>
       {this.state.changeComp ?
        <Input data={this.state.daily}
        city={this.state.currently.city}
        date={this.state.currently.date}
        temp={this.state.currently.currentTemp}
        icon={this.state.currently.icon}
        precipChance={this.state.currently.precipChance}
        precipIntense={this.state.currently.precipIntense}
        uvIndex={this.state.currently.uvIndex}/>
        :
        <Homepage />
      }
              { /* {React.cloneElement(this.props.children, {
        currently: this.state.currently,
        daily: this.state.daily
      })} */ }
          </div>
      );
  }
}


export default App;
