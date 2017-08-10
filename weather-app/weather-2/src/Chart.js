import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

class Chart extends Component {
  render() {
    console.log(this.props)
    return (
      <div className='chart'>
      <Bar data={this.props.data} options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
            ticks: {
              suggestedMin: this.props.minTemp - 2,
              suggestedMax: this.props.maxTemp + 2,
              maxTicksLimit: 5
            }
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              max: 1,
              min: 0,
              maxTicksLimit: 5
            }
          }]
        }
      }} width={500} height={350}/>
      </div>
    )
  }
}
;

export default Chart;
