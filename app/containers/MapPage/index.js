/**
 *
 * MapPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import { Map, Scene, loadModules } from "react-arcgis";
import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectMapPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";

/* eslint-disable react/prefer-stateless-function */
export class MapPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>MapPage</title>
          <meta name="description" content="Description of MapPage" />
        </Helmet>
        <Map
          style={{ width: "100%", height: "calc(100vh - 80px)" }}
          mapProperties={{ basemap: "topo" }}
          viewProperties={{
            center: [55.422197, 25.3481969],
            zoom: 11
          }}
        />
      </div>
    );
  }
}

MapPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  mappage: makeSelectMapPage()
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

const withReducer = injectReducer({ key: "mapPage", reducer });
const withSaga = injectSaga({ key: "mapPage", saga });

export default compose(
  withReducer,
  withSaga,
  withConnect
)(MapPage);
