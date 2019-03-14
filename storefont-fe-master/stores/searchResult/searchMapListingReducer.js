import Immutable from 'immutable';
import {
  SHOW_LISTING_MAP_RESULTS,
  SEARCH_LISTING_MAP,
  GET_LISTINGS_OF_A_GROUP_SUCCEEDED,
} from '~/actions/BusinessActionTypes';

export const LISTING_RESULT_MAP_STORE = 'listingResultMapStore';
export const LISTINGS_OF_A_GROUP = 'listingsOfGroup';

export const searchMapListingReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case SEARCH_LISTING_MAP:
    return state.set(SEARCH_LISTING_MAP, action.payload);
  case SHOW_LISTING_MAP_RESULTS:
    return state.set(LISTING_RESULT_MAP_STORE, action.payload);
  case GET_LISTINGS_OF_A_GROUP_SUCCEEDED:
    return state.set(LISTINGS_OF_A_GROUP, action.payload);
  default:
    return state;
  }
};

export function searchListingMapResult() {
  return { type: SEARCH_LISTING_MAP, payload: {} };
}

export default searchMapListingReducer;
