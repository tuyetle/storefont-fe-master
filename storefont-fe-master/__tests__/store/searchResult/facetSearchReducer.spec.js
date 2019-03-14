import Immutable from 'immutable';
import facetSearchReducer, { FACET_SEARCH_RESULTS } from '~/stores/searchResult/facetSearchReducer';
import { GET_FACET_SEARCH_SUCCEEDED } from '~/actions/BusinessActionTypes';

describe('(Store) facetSearchReducer', () => {
  let state;
  let action;

  beforeEach(() => {
    state = Immutable.Map({});
  });

  it('should set new value into the app store', () => {
    action = {
      type: GET_FACET_SEARCH_SUCCEEDED,
      payload: [],
    };

    const newState = facetSearchReducer(state, action);

    expect(Immutable.Map.isMap(newState)).toEqual(true);
    expect(newState.get(FACET_SEARCH_RESULTS)).toBeDefined();
  });
});
