import { fromJS } from 'immutable';
import summarySensorReducer from '../reducer';

describe('summarySensorReducer', () => {
  it('returns the initial state', () => {
    expect(summarySensorReducer(undefined, {})).toEqual(fromJS({}));
  });
});
