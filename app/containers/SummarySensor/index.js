/**
 *
 * SummarySensor
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
import makeSelectSummarySensor from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class SummarySensor extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>SummarySensor</title>
          <meta name="description" content="Description of SummarySensor" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SummarySensor.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  summarysensor: makeSelectSummarySensor()
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

const withReducer = injectReducer({ key: "summarySensor", reducer });
const withSaga = injectSaga({ key: "summarySensor", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SummarySensor);
