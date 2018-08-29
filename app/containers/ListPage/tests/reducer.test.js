import { fromJS } from 'immutable';
import listPageReducer from '../reducer';

describe('listPageReducer', () => {
  it('returns the initial state', () => {
    expect(listPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
