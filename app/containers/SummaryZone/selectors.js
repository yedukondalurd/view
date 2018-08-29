import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the summaryZone state domain
 */

const selectSummaryZoneDomain = state => state.get("summaryZone", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by SummaryZone
 */

const makeSelectSummaryZone = () =>
  createSelector(selectSummaryZoneDomain, substate => substate.toJS());

export default makeSelectSummaryZone;
export { selectSummaryZoneDomain };
