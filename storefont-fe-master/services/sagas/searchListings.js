import { put, call, takeLatest } from 'redux-saga/effects';
import {
  searchListingApi,
  searchListingApiSearchMap,
  getListingsPreviewApi,
  getListingsOfGroup,
} from '~/services/apis/searchListingsApis';
import {
  SEARCH_LISTINGS,
  SEARCH_LISTING_MAP,
  SHOW_LISTING_MAP_RESULTS,
  SEARCH_LISTINGS_SUCCEEDED,
  SEARCH_ACTIVE_LISTING,
  SHOW_ACTIVE_LISTING_RESULTS,
  GET_LISTINGS_OF_A_GROUP,
  GET_LISTINGS_OF_A_GROUP_SUCCEEDED,
} from '~/actions/BusinessActionTypes';

function* searchListings(action) {
  const { keys, currentPage, pageSize } = action.payload;

  const data = yield call(searchListingApi, keys, currentPage, pageSize);
  yield put({
    type: SEARCH_LISTINGS_SUCCEEDED,
    payload: data,
  });
}

function* searchListingsMap(action) {
  let conditions = {};
  if (!action.payload) {
    conditions = action.payload;
  }

  const data = yield call(searchListingApiSearchMap, conditions);
  yield put({
    type: SHOW_LISTING_MAP_RESULTS,
    payload: data,
  });
}

function* searchActiveListings(action) {
  const id = action.payload;
  const result = yield call(getListingsPreviewApi, id);
  yield put({
    type: SHOW_ACTIVE_LISTING_RESULTS,
    payload: result.data,
  });
}

function* getListingOfGroup(action) {
  const id = action.payload;
  const result = yield call(getListingsOfGroup, id);

  yield put({
    type: GET_LISTINGS_OF_A_GROUP_SUCCEEDED,
    payload: result.data,
  });
}

export function* watchSearchListings() {
  yield takeLatest(SEARCH_LISTINGS, searchListings);
}

export function* watchSearchListingsMap() {
  yield takeLatest(SEARCH_LISTING_MAP, searchListingsMap);
}

export function* watchSearchActiveListings() {
  yield takeLatest(SEARCH_ACTIVE_LISTING, searchActiveListings);
}

export function* watchGetListingOfGroup() {
  yield takeLatest(GET_LISTINGS_OF_A_GROUP, getListingOfGroup);
}

export default watchSearchListings;
