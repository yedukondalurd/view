/*
 *
 * MainPage actions
 *
 */

import { DEFAULT_ACTION, SET_NAV_DRAWER_TOGGLE } from "./constants";

export function defaultAction() {
  return {
    type: DEFAULT_ACTION
  };
}

export function setNavDrawerToggle(isOpen) {
  return {
    type: SET_NAV_DRAWER_TOGGLE,
    isOpen
  };
}
