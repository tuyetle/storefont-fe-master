import Immutable from 'immutable';
import {
  SEARCH_ACTIVE_LISTING,
  SHOW_ACTIVE_LISTING_RESULTS,
} from '~/actions/BusinessActionTypes';

export const SEARCH_ACTIVE_LISTING_STORE = 'searchActiveListingStored';
export const SEARCH_ACTIVE_LISTING_RESULTS = 'searchActiveListingResults';

const searchActiveListingReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case SEARCH_ACTIVE_LISTING:
    return state.set(SEARCH_ACTIVE_LISTING_STORE, action.payload);
  case SHOW_ACTIVE_LISTING_RESULTS:
    return state.set(SEARCH_ACTIVE_LISTING_RESULTS, action.payload);
  default:
    return state;
  }
};

export default searchActiveListingReducer;
