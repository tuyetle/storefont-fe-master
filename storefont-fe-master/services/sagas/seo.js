import { put, call, takeLatest } from 'redux-saga/effects';
import { getSeoLinksApi } from '~/services/apis/seoApi';
import {
  GET_SEO_LINKS,
  GET_SEO_LINKS_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* getSeoLinks() {
  const returnedData = yield call(getSeoLinksApi);

  yield put({
    type: GET_SEO_LINKS_COMPLETED,
    payload: (returnedData.data && returnedData.data.result) || [],
  });
}

export default function* watchGetSeoLinks() {
  yield takeLatest(GET_SEO_LINKS, getSeoLinks);
}
