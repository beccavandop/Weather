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
<<<<<<< HEAD
        <Chart data={this.props.data} minTemp={this.props.minTemp} maxTemp={this.props.maxTemp} />
=======

        <h3> Seven Day Forcast</h3>
        <Chart data={this.props.data} />
>>>>>>> 2a8da394e07ac8e4a55c22528c22cc410b75a939
      </div>
      );
  }
}

export default Input;
