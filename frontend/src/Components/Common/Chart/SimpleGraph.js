/* SimpleGraph.js */
import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class SimpleGraph extends Component {
  render() {
    const options = {
      animationEnabled: true,
      backgroundColor: "#000000", // Set background to black
      title: {
        text: "Monthly Sales - 2017",
        fontColor: "#FFFFFF", // Set title text color to white
      },
      axisX: {
        valueFormatString: "MMM",
        labelFontColor: "#FFFFFF", // Set X-axis label color to white
        lineColor: "#FFFFFF", // Set X-axis line color to white
        tickColor: "#FFFFFF", // Set tick marks to white
      },
      axisY: {
        title: "Sales (in USD)",
        titleFontColor: "#FFFFFF", // Set Y-axis title color to white
        labelFontColor: "#FFFFFF", // Set Y-axis label color to white
        lineColor: "#FFFFFF", // Set Y-axis line color to white
        tickColor: "#FFFFFF", // Set tick marks to white
        gridColor: "#444444", // Set grid lines to dark gray
        prefix: "$",
      },
      data: [
        {
          yValueFormatString: "$#,###",
          xValueFormatString: "MMMM",
          type: "spline",
          lineColor: "#FF4500", // Set line color to orange
          markerColor: "#FF4500", // Set data point color to orange
          dataPoints: [
            { x: new Date(2017, 0), y: 25060 },
            { x: new Date(2017, 1), y: 27980 },
            { x: new Date(2017, 2), y: 42800 },
            { x: new Date(2017, 3), y: 32400 },
            { x: new Date(2017, 4), y: 35260 },
            { x: new Date(2017, 5), y: 33900 },
            { x: new Date(2017, 6), y: 40000 },
            { x: new Date(2017, 7), y: 52500 },
            { x: new Date(2017, 8), y: 32300 },
            { x: new Date(2017, 9), y: 42000 },
            { x: new Date(2017, 10), y: 37160 },
            { x: new Date(2017, 11), y: 38400 },
          ],
        },
      ],
    };
    return (
      <div>
        <CanvasJSChart options={options} />
      </div>
    );
  }
}

export default SimpleGraph;
