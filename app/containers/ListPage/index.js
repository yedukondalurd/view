/**
 *
 * ListPage
 *
 */

import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import { FormattedMessage } from "react-intl";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Badge from "@material-ui/core/Badge";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ButtonBase from "@material-ui/core/ButtonBase";
import Divider from "@material-ui/core/Divider";
import SquarePin from "components/icons/SquarePin";
import injectSaga from "utils/injectSaga";
import injectReducer from "utils/injectReducer";
import makeSelectListPage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";
import messages from "./messages";
const styles = theme => ({
  indicator: {
    color: "red"
  },
  margin: {
    margin: theme.spacing.unit * 2
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});
/* eslint-disable react/prefer-stateless-function */
export class ListPage extends React.PureComponent {
  state = {
    value: 2
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>ListPage</title>
          <meta name="description" content="Description of ListPage" />
        </Helmet>
        <div>
          <Tabs
            TabIndicatorProps={{
              style: {
                backgroundColor: "red"
              }
            }}
            value={this.state.value}
            indicatorColor="primary"
            textColor="secondary"
            onChange={this.handleChange}
          >
            <Tab label="All" />
            <Tab
              style={{ color: "green" }}
              label={
                <ListItem>
                  <ListItemIcon>
                    <SquarePin width={20} height={20} />
                  </ListItemIcon>

                  <Badge
                    className={classes.padding}
                    color="secondary"
                    badgeContent={4}
                  >
                    Transient
                  </Badge>
                </ListItem>
              }
            />
            <Tab label="Acoustic" />
            <Tab label="Pressure" />
          </Tabs>
          <Divider />
        </div>
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
  withConnect,
  withStyles(styles, { withTheme: true })
)(ListPage);
