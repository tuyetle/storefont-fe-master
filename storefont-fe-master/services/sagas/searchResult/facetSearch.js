import { put, call, takeLatest } from 'redux-saga/effects';
import { getFacetSearchApi } from '~/services/apis/searchResult/facetSearchApi';
import {
  GET_FACET_SEARCH,
  GET_FACET_SEARCH_SUCCEEDED,
} from '~/actions/BusinessActionTypes';

export function* getFacetSearch() {
  const returnedData = yield call(getFacetSearchApi);
  yield put({
    type: GET_FACET_SEARCH_SUCCEEDED,
    payload: (returnedData.data.default) || [],
  });
}

export default function* watchGetFacetSearch() {
  yield takeLatest(GET_FACET_SEARCH, getFacetSearch);
}
