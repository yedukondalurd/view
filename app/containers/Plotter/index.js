/**
 *
 * Plotter
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

import TopNav from "./TopNav";
import ActionToolbar from "components/ActionToolbar";
import Container from "components/ActionToolbar/Container";
import Grid from "@material-ui/core/Grid";

import PChart from "./PChart";
import PGrid from "./PGrid";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectPlotter from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  topDrawer: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  }
});

/* eslint-disable react/prefer-stateless-function */
export class Plotter extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ backgroundColor: "#E7EBEE" }}>
        <Helmet>
          <title>Plotter</title>
          <meta name="description" content="Description of Plotter" />
        </Helmet>
        <Grid container direction="row" spacing={16}>
          <Grid item xs={1}>
            <ActionToolbar placement="left" />
          </Grid>
          <Grid item xs={10}>
            item 2
          </Grid>
          <Grid item xs={1}>
            item 3
          </Grid>
        </Grid>

        {/*<PChart />
        <PGrid />
        <ActionToolbar placement="top" />
        <ActionToolbar placement="left" />
        <Container>
          <Grid container spacing={10}>
            grid container
          </Grid>
        </Container>
        <ActionToolbar placement="right" />
        <ActionToolbar placement="bottom" />
        <Drawer variant="permanent" anchor={"right"} open={true}>
          <Button variant="fab" mini color="secondary" aria-label="Add">
            <AddIcon />
          </Button>
        </Drawer>
        <Drawer variant="permanent" anchor={"bottom"} open={true}>
          <Button variant="fab" mini color="secondary" aria-label="Add">
            <AddIcon />
          </Button>
        </Drawer>
        <Drawer variant="permanent" open={true}>
          yes
          <Button variant="fab" mini color="secondary" aria-label="Add">
            <AddIcon />
          </Button>
        </Drawer>*/}
      </div>
    );
  }
}

Plotter.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  plotter: makeSelectPlotter()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

const withReducer = injectReducer({ key: "plotter", reducer });
const withSaga = injectSaga({ key: "plotter", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(styles)
)(Plotter);
