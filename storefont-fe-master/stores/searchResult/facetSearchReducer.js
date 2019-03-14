import Immutable from 'immutable';

import { GET_FACET_SEARCH, GET_FACET_SEARCH_SUCCEEDED } from '~/actions/BusinessActionTypes';

export const FACET_SEARCH_STORE = 'facetSearchStore';
export const FACET_SEARCH_RESULTS = 'facetSearchResults';

const facetSearchReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_FACET_SEARCH_SUCCEEDED:
    return state.set(FACET_SEARCH_RESULTS, action.payload);
  default:
    return state;
  }
};

export function getFacetSearch() {
  return { type: GET_FACET_SEARCH, payload: {} };
}

export default facetSearchReducer;
