import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the summarySensor state domain
 */

const selectSummarySensorDomain = state =>
  state.get("summarySensor", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummarySensor
 */

const makeSelectSummarySensor = () =>
  createSelector(selectSummarySensorDomain, substate => substate.toJS());

export default makeSelectSummarySensor;
export { selectSummarySensorDomain };
