import { put, call, takeLatest } from 'redux-saga/effects';
import {
  SEARCH_LISTING_SUBMIT,
  SEARCH_LISTINGS_SUCCEEDED,
  SEARCH_LISTING_FORM_DATA_BINDING,
  SEARCH_LISTING_FORM_DATA_BINDING_COMPLETED,
  SHOW_LISTING_MAP_RESULTS,
  SAVE_SEARCH_SUCCEEDED,
  SAVE_SEARCH,
} from '~/actions/BusinessActionTypes';
import {
  searchResultFormDataApi,
  saveSearchApi,
} from '~/services/apis/searchResult/searchResultFormDataApi';

import {
  searchListingApi,
  searchListingApiSearchMap,
} from '~/services/apis/searchListingsApis';

function* searchListingSubmitForm(action) {
  // Build conditions and get data.
  const listingData = yield call(searchListingApi, action.payload, 1, 10);
  yield put({
    type: SEARCH_LISTINGS_SUCCEEDED,
    payload: {
      filters: action.payload,
      results: listingData,
    },
  });
  //
  // // build payload data with conditions here.
  const mapData = yield call(searchListingApiSearchMap, action.payload);
  yield put({
    type: SHOW_LISTING_MAP_RESULTS,
    payload: mapData,
  });
}

export function* watchSearchListingSubmitForm() {
  yield takeLatest(SEARCH_LISTING_SUBMIT, searchListingSubmitForm);
}

function* searchListingFormData() {
  const returnedData = yield call(searchResultFormDataApi);
  yield put({
    type: SEARCH_LISTING_FORM_DATA_BINDING_COMPLETED,
    payload: returnedData,
  });
}

export function* watchSearchListingFormData() {
  yield takeLatest(SEARCH_LISTING_FORM_DATA_BINDING, searchListingFormData);
}

export function* saveSearch(action) {
  const { url } = action.payload;
  const { data } = yield call(saveSearchApi, url);
  yield put({
    type: SAVE_SEARCH_SUCCEEDED,
    payload: { data },
  });
}

export function* watchSaveSearch() {
  yield takeLatest(SAVE_SEARCH, saveSearch);
}
