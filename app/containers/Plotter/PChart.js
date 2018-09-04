/**
 *
 * Plotter
 *
 */

import React from "react";
import PropTypes from "prop-types";

import Highcharts from "highcharts";
import {
  HighchartsChart,
  Chart,
  withHighcharts,
  XAxis,
  YAxis,
  Title,
  Subtitle,
  Legend,
  LineSeries
} from "react-jsx-highcharts";

/* eslint-disable react/prefer-stateless-function */
class PChart extends React.PureComponent {
  render() {
    return (
      <div>
        <HighchartsChart>
          <Chart />

          <Legend layout="vertical" align="right" verticalAlign="middle" />

          <XAxis>
            <XAxis.Title>Time</XAxis.Title>
          </XAxis>

          <YAxis>
            <YAxis.Title>Number of employees</YAxis.Title>
            <LineSeries
              name="Installation"
              data={[43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]}
            />
            <LineSeries
              name="Manufacturing"
              data={[24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]}
            />
            <LineSeries
              name="Sales & Distribution"
              data={[11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]}
            />
            <LineSeries
              name="Project Development"
              data={[null, null, 7988, 12169, 15112, 22452, 34400, 34227]}
            />
            <LineSeries
              name="Other"
              data={[12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]}
            />
          </YAxis>
        </HighchartsChart>
      </div>
    );
  }
}

export default withHighcharts(PChart, Highcharts);