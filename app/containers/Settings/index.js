/**
 *
 * Settings
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectSettings from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class Settings extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Settings</title>
          <meta name="description" content="Description of Settings" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

Settings.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  settings: makeSelectSettings()
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

const withReducer = injectReducer({ key: "settings", reducer });
const withSaga = injectSaga({ key: "settings", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(Settings);
