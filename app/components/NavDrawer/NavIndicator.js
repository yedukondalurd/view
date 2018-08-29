import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";

export const styles = theme => ({
  root: {
    position: "absolute",
    height: 2,
    bottom: 0,
    width: "100%",
    transition: theme.transitions.create(),
    willChange: "left, width"
  },
  colorPrimary: {
    backgroundColor: theme.palette.primary.main
  },
  colorSecondary: {
    backgroundColor: theme.palette.secondary.main
  }
});

function NavIndicator(props) {
  const { classes, className, color, ...other } = props;

  return (
    <span
      className={classNames(classes.root, classes[`color${color}`], className)}
      {...other}
    />
  );
}

NavIndicator.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(["primary", "secondary"])
};

export default withStyles(styles)(NavIndicator);
