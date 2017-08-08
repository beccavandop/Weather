import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Homepage extends Component {
  render() {
    return (
      <div>
        <div className="home-page">
      <h2> This is an adorable weather app, that tells you the forcast of <span className="em"> anywhere in the world </span> </h2>
      </div>
      <div className="logo-div">
        <img src="sunandclouds.svg" alt="Smiley face"/>
      </div>
      </div>
    )
  }
}

export default Homepage;
