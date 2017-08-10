import React, { Component } from 'react';
import './App.css';
import Chart from './Chart.js'

class Input extends Component {
  render() {
    return (
      <div className="weather-input">
        <span className="left"><p>{this.props.city}</p></span> <span className="right"><p> {this.props.date}</p></span>
        <div className="icon">
        <img src={`${this.props.icon}.svg`} alt=""/>
        </div>
         <p className="day">{this.props.icon}</p>
        <p className="temp">{this.props.temp}°</p>
        <p className="precip">Chance of precipitation: <b>{this.props.precipChance}</b></p>
        <p className="precip">Precipitation Intensity:<b> {this.props.precipIntense}</b></p>
        <p className="precip">UV Index: <b>{this.props.uvIndex}</b></p>

        <h3>SEVEN DAY FORCAST IN <br/><span className="city-sevenday">{this.props.city}</span></h3>
        <Chart data={this.props.data} minTemp={this.props.minTemp} maxTemp={this.props.maxTemp} />
      </div>
      );
  }
}

export default Input;
