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
        {placement === "top" && <TopToolbar>This is toolbar</TopToolbar>}
        {placement === "left" && (
          <LeftToolbar style={style}>
            <button>Top</button>
            <div style={{ flex: 1 }} />
            <button>Bot</button>
          </LeftToolbar>
        )}
        {placement === "right" && (
          <RightToolbar style={style}>
            <button>Top</button>
            <div style={{ flex: 1 }} />
            <button>Bot</button>
          </RightToolbar>
        )}
        {placement === "bottom" && (
          <BottomToolbar>This is toolbar</BottomToolbar>
        )}
      </div>
    );
  }
}

ActionToolbar.propTypes = {
  placement: PropTypes.string.isRequired
};

export default withStyles(styles)(ActionToolbar);
