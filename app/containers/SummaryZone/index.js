/**
 *
 * SummaryZone
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
import makeSelectSummaryZone from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class SummaryZone extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>SummaryZone</title>
          <meta name="description" content="Description of SummaryZone" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

SummaryZone.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  summaryzone: makeSelectSummaryZone()
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

const withReducer = injectReducer({ key: "summaryZone", reducer });
const withSaga = injectSaga({ key: "summaryZone", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(SummaryZone);
