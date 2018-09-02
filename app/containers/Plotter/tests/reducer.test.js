import { fromJS } from 'immutable';
import plotterReducer from '../reducer';

describe('plotterReducer', () => {
  it('returns the initial state', () => {
    expect(plotterReducer(undefined, {})).toEqual(fromJS({}));
  });
});
