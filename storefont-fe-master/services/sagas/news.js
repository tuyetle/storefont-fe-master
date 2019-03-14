import { put, call, takeLatest } from 'redux-saga/effects';
import { getLatestNewsApi } from '~/services/apis/newsApi';
import {
  GET_LATEST_NEWS,
  GET_LATEST_NEWS_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* getLatestNews() {
  const returnedData = yield call(getLatestNewsApi);

  yield put({
    type: GET_LATEST_NEWS_COMPLETED,
    payload: (returnedData.data && returnedData.data.result) || [],
  });
}

export default function* watchGetLatestNews() {
  yield takeLatest(GET_LATEST_NEWS, getLatestNews);
}
