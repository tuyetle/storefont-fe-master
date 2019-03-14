import { put, call, takeLatest } from 'redux-saga/effects';
import { getListingSuggestionApi } from '~/services/apis/listingSuggestionApi';
import {
  GET_SUGGESTION,
  GET_SUGGESTION_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* getListingSuggestion(action) {
  const { keyword } = action.payload;

  const returnedData = yield call(getListingSuggestionApi, keyword);
  yield put({
    type: GET_SUGGESTION_COMPLETED,
    payload: returnedData,
  });
}

export default function* watchGetListingSuggestion() {
  yield takeLatest(GET_SUGGESTION, getListingSuggestion);
}
