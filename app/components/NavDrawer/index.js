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
import MapIcon from "@material-ui/icons/Map";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import TableChartIcon from "@material-ui/icons/TableChart";
import { Link } from "react-router-dom";

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { navDrawerStyles } from "./styles/navDrawerStyles";
import NavIndicator from "./NavIndicator";

/* eslint-disable react/prefer-stateless-function */
class NavDrawer extends React.PureComponent {
  render() {
    const { classes, theme, open, handleDrawerClose } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          )
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
          <ListItem button component={Link} to="/">
            <ListItemIcon>
              <MapIcon />
            </ListItemIcon>
            <ListItemText primary="Map" />
          </ListItem>
          <ListItem button component={Link} to="/list">
            <ListItemIcon>
              <TableChartIcon />
            </ListItemIcon>
            <ListItemText primary="Table" />
          </ListItem>
        </List>
        <NavIndicator />
      </Drawer>
    );
  }
}

NavDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withStyles(navDrawerStyles, { withTheme: true })(NavDrawer);
