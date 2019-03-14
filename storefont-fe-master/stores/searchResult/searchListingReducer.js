import Immutable from 'immutable';
import {
  SEARCH_LISTINGS,
  SEARCH_LISTINGS_SUCCEEDED,
  SAVE_LISTING_SUCCEEDED,
  SAVE_LISTING_FAILED,
} from '~/actions/BusinessActionTypes';

export const LISTING_RESULT_STORE = 'listingResultStore';
export const LISTING_RESULTS = 'listingResults';
export const LISTING_FILTERS = 'listingFilters';

const searchListingReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case SEARCH_LISTINGS:
    return state.set(LISTING_RESULT_STORE, action.payload);
  case SEARCH_LISTINGS_SUCCEEDED:
    return state.set(LISTING_RESULTS, action.payload.results)
      .set(LISTING_FILTERS, action.payload.filters);
  case SAVE_LISTING_SUCCEEDED:
  {
    const data = state.get(LISTING_RESULTS);
    if (data === undefined) {
      return state;
    }
    const result = data.listings.map(item =>
      ((item.id === action.payload) ? { ...item, saved: !item.saved } : item));

    return state.set(LISTING_RESULTS, { listings: result, foundItems: data.foundItems });
  }

  case SAVE_LISTING_FAILED:
    // TODO: handle for SAVE_LISTING_FAILED
    return state;
  default:
    return state;
  }
};

export function searchListingResult() {
  return { type: SEARCH_LISTINGS, payload: {} };
}

export default searchListingReducer;
