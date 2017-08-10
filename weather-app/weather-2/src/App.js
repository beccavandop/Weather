import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Input from './Input';
import Homepage from './Homepage';
import BadGate from './badgate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      currently: {},
      daily: [],
      changeComp: 2,
      data: {},
      minTemp: 0,
      maxTemp: 0
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  // this.getData = this.getData.bind(this);
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
  //
  // getData() {
  //   let maxTempData = []
  //   let labelData = []
  //   let rainData = []
  //   let barColor = 'rgba(255, 99, 132, 0.8)'
  //   let barColorArray1 = [barColor, barColor, barColor, barColor, barColor, barColor, barColor]
  //   let barColor2 = 'rgba(157, 192, 249, 0.8)'
  //   let barColorArray2 = [barColor2, barColor2, barColor2, barColor2, barColor2, barColor2, barColor2]
  //   for (var i = 0; i < this.state.daily.length; i++) {
  //     maxTempData.push(this.state.daily[i].tempMax)
  //     labelData.push(this.state.daily[i].date)
  //     rainData.push(this.state.daily[i].precipChance)
  //   }
  //   // console.log(maxTempData)
  //   let newMin = Math.min(...maxTempData)
  //   let newMax = Math.max(...maxTempData)
  //   this.setState({
  //     data: {
  //       'labels': labelData,
  //       'datasets': [{
  //         'label': 'Temperature (C)',
  //         'yAxisID': 'A',
  //         'data': maxTempData,
  //         'backgroundColor': barColorArray1
  //       }, {
  //         'label': 'Rain Chance',
  //         'yAxisID': 'B',
  //         'data': rainData,
  //         'backgroundColor': barColorArray2
  //       },]
  //     },
  //     minTemp: newMin,
  //     maxTemp: newMax
  //   });
  //   console.log(this.state)
  // }
  handleSubmit(event) {
    event.preventDefault(); //prevents page from reloading
    // console.log('You typed: ' + this.state.text); //console.log to test

    axios.post('http://localhost:8080/', {
      text: this.state.text
    })
      .then(res => {
        let maxTempData = []
        let labelData = []
        let rainData = []
        let barColor = 'rgba(255, 99, 132, 0.8)'
        let barColorArray1 = [barColor, barColor, barColor, barColor, barColor, barColor, barColor]
        let barColor2 = 'rgba(157, 192, 249, 0.8)'
        let barColorArray2 = [barColor2, barColor2, barColor2, barColor2, barColor2, barColor2, barColor2]
        for (var i = 1; i < res.data.daily.data.length; i++) {
          maxTempData.push(this.toCelsius(res.data.daily.data[i].temperatureMax))
          labelData.push(this.timeConverter(res.data.daily.data[i].time))
          rainData.push(res.data.daily.data[i].precipProbability)
        }
        let newMin = Math.min(...maxTempData)
        let newMax = Math.max(...maxTempData)
        this.setState({
          text: '',
          changeComp: 1,
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
          ],
          data: {
            'labels': labelData,
            'datasets': [{
              'label': 'Temperature (C)',
              'yAxisID': 'A',
              'data': maxTempData,
              'backgroundColor': barColorArray1
            }, {
              'label': 'Rain Chance',
              'yAxisID': 'B',
              'data': rainData,
              'backgroundColor': barColorArray2
            },]
          },
          minTemp: newMin,
          maxTemp: newMax,
        })
      })
      .catch(error => {
        console.log('error catch: ' + error)
        this.setState({
          changeComp: 3
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
      {this.state.changeComp === 1 ? <Input data={this.state.data}
      minTemp={this.state.minTemp}
      maxTemp={this.state.maxTemp}
      city={this.state.currently.city}
      date={this.state.currently.date}
      temp={this.state.currently.currentTemp}
      icon={this.state.currently.icon}
      precipChance={this.state.currently.precipChance}
      precipIntense={this.state.currently.precipIntense}
      uvIndex={this.state.currently.uvIndex}/> : <div></div>}
       {this.state.changeComp === 2 ? <Homepage /> : <div></div>}
       {this.state.changeComp === 3 ? <BadGate /> : <div></div>}
              { /* {React.cloneElement(this.props.children, {
        currently: this.state.currently,
        daily: this.state.daily
      })} */ }
          </div>
      );
  }
}


export default App;
