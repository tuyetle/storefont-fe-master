import { put, call, takeLatest } from 'redux-saga/effects';
import { getPropertyDetailApi } from '~/services/apis/propertyDetailApi';
import {
  GET_PROPERTY_DETAIL,
  GET_PROPERTY_DETAIL_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* getPropertyDetail(action) {
  const { listingId } = action.payload;

  const returnedData = yield call(getPropertyDetailApi, listingId);
  yield put({
    type: GET_PROPERTY_DETAIL_COMPLETED,
    payload: returnedData,
  });
}

export default function* watchGetPropertyDetail() {
  yield takeLatest(GET_PROPERTY_DETAIL, getPropertyDetail);
}
