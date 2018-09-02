/**
 *
 * Plotter
 *
 */

import React from "react";
import PropTypes from "prop-types";

import { withStyles } from "@material-ui/core/styles";

import Drawer from "@material-ui/core/Drawer";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

/* eslint-disable react/prefer-stateless-function */
class TopNav extends React.PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ width: "500px" }}>
        <Drawer
          style={{ width: "100%" }}
          variant="permanent"
          anchor={"top"}
          open={true}
        >
          Hello
        </Drawer>
      </div>
    );
  }
}

TopNav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TopNav);
