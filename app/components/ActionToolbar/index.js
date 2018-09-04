/**
 *
 * ActionToolbar
 *
 */

import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// import styled from 'styled-components';
import { withStyles } from "@material-ui/core/styles";

import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { styles } from "./style";
import TopToolbar from "./TopToolbar";
import LeftToolbar from "./LeftToolbar";
import RightToolbar from "./RightToolbar";
import BottomToolbar from "./BottomToolbar";

/* eslint-disable react/prefer-stateless-function */
class ActionToolbar extends React.PureComponent {
  render() {
    const { children, classes, placement, style } = this.props;
    return (
      <div>
        {placement === "top" && <TopToolbar>{children}</TopToolbar>}
        {placement === "left" && <LeftToolbar>{children}</LeftToolbar>}
        {placement === "right" && <RightToolbar>{children}</RightToolbar>}
        {placement === "bottom" && <BottomToolbar>{children}</BottomToolbar>}
      </div>
    );
  }
}

ActionToolbar.propTypes = {
  placement: PropTypes.string.isRequired
};

export default withStyles(styles)(ActionToolbar);
