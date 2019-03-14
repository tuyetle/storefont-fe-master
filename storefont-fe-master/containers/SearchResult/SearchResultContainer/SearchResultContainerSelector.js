import { createSelector } from 'reselect';
import { LISTING_RESULT_STORE, LISTING_RESULTS } from '~/stores/searchResult/searchListingReducer';
import { LISTING_RESULT_MAP_STORE, LISTINGS_OF_A_GROUP } from '~/stores/searchResult/searchMapListingReducer';
import { SEARCH_ACTIVE_LISTING_STORE, SEARCH_ACTIVE_LISTING_RESULTS } from '~/stores/searchResult/searchActiveListingReducer';
import { FACET_SEARCH_STORE, FACET_SEARCH_RESULTS } from '~/stores/searchResult/facetSearchReducer';

// get search result from store
const getListings = state => state.get(LISTING_RESULT_STORE);
const getListingsMap = state => state.get(LISTING_RESULT_MAP_STORE);
const getActiveListing = state => state.get(SEARCH_ACTIVE_LISTING_STORE);
const getFacetSearch = state => state.get(FACET_SEARCH_STORE);

const makeSearchListings = () => createSelector(
  getListings,
  searchState => searchState.get(LISTING_RESULTS),
);

const makeSearchListingsOnMap = () => createSelector(
  getListingsMap,
  listMapState => listMapState.get(LISTING_RESULT_MAP_STORE),
);

const makeSearchActiveListing = () => createSelector(
  getActiveListing,
  activeListing => (activeListing ? activeListing.get(SEARCH_ACTIVE_LISTING_RESULTS) : {}),
);

const makeListingsOfGroupOnMap = () => createSelector(
  getListingsMap,
  listings => (listings ? listings.get(LISTINGS_OF_A_GROUP) : []),
);

const makeGetFacetSearch = () => createSelector(
  getFacetSearch,
  state => (state.get(FACET_SEARCH_RESULTS)),
);

export {
  getListings,
  getListingsMap,
  makeSearchListings,
  makeSearchListingsOnMap,
  getActiveListing,
  makeSearchActiveListing,
  makeListingsOfGroupOnMap,
  makeGetFacetSearch,
};
