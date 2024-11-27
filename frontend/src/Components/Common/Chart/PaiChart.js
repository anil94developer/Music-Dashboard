import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class PaiChart extends Component {
    render() {
        const options = {
            exportEnabled: true,
            animationEnabled: true,
            theme: "dark2",
            title: {
                text: "Developer Work Week"
            },
            subtitles: [{
                text: "Median hours/week"
            }],
            data: [{
                type: "doughnut",
                startAngle: 90,
                indexLabel: "{name} ({y})",
                yValueFormatString: "#,##0.0#"%"",
                dataPoints: [
                    { name: "Writing Code", y: 30.7 },
                    { name: "Debugging", y: 36.4 },
                    { name: "Problem Solving", y: 3.7 },
                    { name: "Firefighting", y: 20.1 },
                    { name: "Overhead", y: 9.1 }
                ]
            }]
        };
 
        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div >
        );
    }
}
export default PaiChart;                              