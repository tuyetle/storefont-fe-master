import { combineReducers } from 'redux-immutable';
import { reducer as formReducer } from 'redux-form/immutable';
import searchActiveListingReducer, { SEARCH_ACTIVE_LISTING_STORE }
  from '~/stores/searchResult/searchActiveListingReducer';
import authReducer, { AUTH_STORE } from './auth';
import searchListingReducer, { LISTING_RESULT_STORE } from './searchResult/searchListingReducer';
import { searchMapListingReducer, LISTING_RESULT_MAP_STORE } from './searchResult/searchMapListingReducer';
import searchingConditionsReducer, { SEARCHING_CONITIONS_STORE } from './searchResult/searchConditions';

import searchListingFormDataReducer, { SEARCH_LISTING_FORM_DATA } from './searchResult/searchListingForm';

import propertyReducer, { PROPERTY_STORE } from './propertyReducer';
import suggestListingReducer, { SUGGESTION_STORE } from './landingPage/suggestListingReducer';
import newsReducer, { NEWS_STORE } from './newsReducer';
import highlightPropertyReducer, { HIGHLIGHT_PROPERTY_STORE } from './highlightPropertyReducer';
import highlightProjectReducer, { HIGHLIGHT_PROJECT_STORE } from './highlightProjectReducer';
import seoReducer, { SEO_STORE } from './seoReducer';
import uiStateReducer, { UI_STATE } from './uiState';
import facetSearchReducer, { FACET_SEARCH_STORE } from './searchResult/facetSearchReducer';

const makeRootReducer = (asyncReducers) => {
  const formPlugin = {};
  const form = formReducer.plugin(formPlugin);

  const reducers = {
    ...asyncReducers,
    form,
  };

  reducers[AUTH_STORE] = authReducer;
  reducers[LISTING_RESULT_STORE] = searchListingReducer;
  reducers[LISTING_RESULT_MAP_STORE] = searchMapListingReducer;
  reducers[SEARCH_ACTIVE_LISTING_STORE] = searchActiveListingReducer;
  reducers[PROPERTY_STORE] = propertyReducer;
  reducers[SUGGESTION_STORE] = suggestListingReducer;
  reducers[NEWS_STORE] = newsReducer;
  reducers[HIGHLIGHT_PROPERTY_STORE] = highlightPropertyReducer;
  reducers[HIGHLIGHT_PROJECT_STORE] = highlightProjectReducer;
  reducers[SEO_STORE] = seoReducer;
  reducers[UI_STATE] = uiStateReducer;
  // Search Listing Form Data.
  reducers[SEARCH_LISTING_FORM_DATA] = searchListingFormDataReducer;
  reducers[SEARCHING_CONITIONS_STORE] = searchingConditionsReducer;
  reducers[FACET_SEARCH_STORE] = facetSearchReducer;

  return combineReducers(reducers);
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  const _store = store;
  _store.asyncReducers[key] = reducer;
  _store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
