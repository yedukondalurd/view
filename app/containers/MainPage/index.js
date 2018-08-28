/**
 *
 * MainPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Header from "components/Header";
import NavDrawer from "components/NavDrawer";
//import Footer from "components/Footer";
import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectMainPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
import { setNavDrawerToggle } from "./actions";
import { contentStyles } from "./styles/contentStyles";

/* eslint-disable react/prefer-stateless-function */
export class MainPage extends React.PureComponent {
  state = {
    open: false,
    anchor: "left"
  };
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { children, classes, theme } = this.props,
      { anchor, open } = this.state;
    return (
      <div>
        <Helmet>
          <title>MainPage</title>
          <meta name="description" content="Description of MainPage" />
        </Helmet>
        <Header
          anchor={anchor}
          open={open}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <NavDrawer
          anchor={anchor}
          open={open}
          handleDrawerClose={this.handleDrawerClose}
        />
        {/*

        <main
          className={classNames(classes.content, classes[`content-${anchor}`], {
            [classes.contentShift]: open,
            [classes[`contentShift-${anchor}`]]: open
          })}
        >
          {children}
        </main>*/}
        <main className={classes.content}>{children}</main>
      </div>
    );
  }
}

MainPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const mapStateToProps = createStructuredSelector({
  mainpage: makeSelectMainPage()
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

const withReducer = injectReducer({ key: "mainPage", reducer });
const withSaga = injectSaga({ key: "mainPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  withStyles(contentStyles, { withTheme: true })
)(MainPage);
