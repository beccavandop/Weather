import React, { Component } from 'react';
import './App.css';

class BadGate extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
          <div className="sun">
          <img src="sun.svg" alt="Smiley face"/>
          </div>
      <h3 className="badgate"> TRY A DIFFERENT CITY </h3>
      </div>
      <div className="city-div">
        <img src="city-skyline.svg" alt="Smiley face"/>
      </div>
      </div>
    )
  }
}

export default BadGate;
