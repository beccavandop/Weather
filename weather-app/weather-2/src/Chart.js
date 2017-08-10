import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './App.css';

class Chart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     data: {},
  //     minTemp: 0
  //   }
  //   this.getData = this.getData.bind(this);
  // }
  // componentWillMount() {
  //   this.getData()
  // }
  // componentWillReceiveProps() {
  //   this.getData()
  // }
  //
  // getData() {
  //   let maxTempData = []
  //   let labelData = []
  //   let rainData = []
  //   let barColor = 'rgba(255, 99, 132, 0.8)'
  //   let barColorArray1 = [barColor, barColor, barColor, barColor, barColor, barColor, barColor]
  //   let barColor2 = 'rgba(157, 192, 249, 0.8)'
  //   let barColorArray2 = [barColor2, barColor2, barColor2, barColor2, barColor2, barColor2, barColor2]
  //   for (var i = 0; i < this.props.data.length; i++) {
  //     maxTempData.push(this.props.data[i].tempMax)
  //     labelData.push(this.props.data[i].date)
  //     rainData.push(this.props.data[i].precipChance)
  //   }
  //   // console.log(maxTempData)
  //   let newMin = Math.min(...maxTempData)
  //   console.log(newMin)
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
  //     minTemp: newMin
  //   })
  // }

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
