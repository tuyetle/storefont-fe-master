import { put, call, takeLatest } from 'redux-saga/effects';
import { getHighlightProperyApi } from '~/services/apis/highlightPropertyApi';
import {
  GET_HIGHLIGHT_PROPERTIES,
  GET_HIGHLIGHT_PROPERTIES_SUCCEEDED,
} from '~/actions/BusinessActionTypes';

function* getHighlightProperties() {
  const data = yield call(getHighlightProperyApi);
  yield put({
    type: GET_HIGHLIGHT_PROPERTIES_SUCCEEDED,
    payload: data,
  });
}

export default function* watchGetHighlightProperties() {
  yield takeLatest(GET_HIGHLIGHT_PROPERTIES, getHighlightProperties);
}
