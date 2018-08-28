import React from "react";
import { FormattedMessage } from "react-intl";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import { appbarStyles } from "./styles/appbarStyles";

import A from "./A";
import Img from "./Img";
import NavBar from "./NavBar";
import HeaderLink from "./HeaderLink";
import Banner from "./banner.jpg";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appbarStyles)(Header);
