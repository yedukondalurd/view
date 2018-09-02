import { createSelector } from "reselect";
import { initialState } from "./reducer";

/**
 * Direct selector to the plotter state domain
 */

const selectPlotterDomain = state => state.get("plotter", initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Plotter
 */

const makeSelectPlotter = () =>
  createSelector(selectPlotterDomain, substate => substate.toJS());

export default makeSelectPlotter;
export { selectPlotterDomain };
