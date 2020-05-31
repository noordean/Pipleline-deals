import React, { Component } from 'react';
import CanvasJSReact from '../../../assets/canvasjs.react';
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

class ColumnChart extends Component {
	render() {
    const { title } = this.props;

		const options = {
			title: {
				text: title
			},
			animationEnabled: true,
			data: [
				{
					type: "column",
					dataPoints: [
						{ label: "Apple", y: 10 },
						{ label: "Orange", y: 15 },
						{ label: "Banana", y: 25 },
						{ label: "Mango", y: 30 },
						{ label: "Grape", y: 28 }
					]
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
