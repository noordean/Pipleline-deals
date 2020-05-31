import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
  render() {
    const { title, dataPoints } = this.props;

    const options = {
      title: {
        text: title
      },
      animationEnabled: true,
      axisY: {
        prefix: "$"
      },
      axisX: {
        title: "Deal stage in percentage"
      },
      data: [
        {
          type: "column",
          dataPoints
        }
      ]
    }

    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default ColumnChart;
