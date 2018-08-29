import { fromJS } from 'immutable';
import summaryZoneReducer from '../reducer';

describe('summaryZoneReducer', () => {
  it('returns the initial state', () => {
    expect(summaryZoneReducer(undefined, {})).toEqual(fromJS({}));
  });
});
