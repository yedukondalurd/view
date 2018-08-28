/**
 *
 * NavDrawer
 *
 */

import React from "react";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { navDrawerStyles } from "./styles/navDrawerStyles";

/* eslint-disable react/prefer-stateless-function */
class NavDrawer extends React.PureComponent {
  render() {
    const { classes, theme, anchor, open, handleDrawerClose } = this.props;
    return (
      <div>
        <Drawer
          variant="persistent"
          anchor={anchor}
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          Hello
        </Drawer>
      </div>
    );
  }
}

NavDrawer.propTypes = {
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(navDrawerStyles, { withTheme: true })(NavDrawer);
