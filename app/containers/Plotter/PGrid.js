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

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import PChart from "./PChart";

/* eslint-disable react/prefer-stateless-function */
class PGrid extends React.PureComponent {
  render() {
    return (
      <div style={{ marginTop: "50px", marginLeft: "50px" }}>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Grid container>
              {[0, 1].map(value => (
                <Grid key={value} item>
                  <PChart />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              {[0, 1].map(value => (
                <Grid key={value} item>
                  <PChart />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withHighcharts(PGrid, Highcharts);
