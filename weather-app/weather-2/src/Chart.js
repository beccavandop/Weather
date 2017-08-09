import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

class Chart extends Component {
  getData() {
    let maxTempData = []
    let labelData = []
    let rainData = []
    let barColor = '#E63946'
    let barColorArray1 = [barColor, barColor, barColor, barColor, barColor, barColor, barColor]
    let barColor2 = '#5CA4A9'
    let barColorArray2 = [barColor2, barColor2, barColor2, barColor2, barColor2, barColor2, barColor2]
    let chartDatum = {}
    console.log(this.props.data)
    for (var i = 0; i < this.props.data.length; i++) {
      maxTempData.push(this.props.data[i].tempMax)
      labelData.push(this.props.data[i].date)
      rainData.push(this.props.data[i].precipChance)
    }
    return chartDatum = {
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
    }
  }

  render() {
    return (
      <div className='chart'>
      <Bar data={this.getData()} options={{
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            id: 'A',
            type: 'linear',
            position: 'left',
            ticks: {
              suggestedMinmin: 25,
              maxTicksLimit: 10
            }
          }, {
            id: 'B',
            type: 'linear',
            position: 'right',
            ticks: {
              max: 1,
              min: 0,
              maxTicksLimit: 10
            }
          }]
        }
      }} width={500} height={400}/>
      </div>
    )
  }
}
;

export default Chart;
