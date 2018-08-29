/**
 *
 * ListPage
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
import makeSelectListPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class ListPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>ListPage</title>
          <meta name="description" content="Description of ListPage" />
        </Helmet>
        <FormattedMessage {...messages.header} />
      </div>
    );
  }
}

ListPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  listpage: makeSelectListPage()
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

const withReducer = injectReducer({ key: "listPage", reducer });
const withSaga = injectSaga({ key: "listPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(ListPage);
