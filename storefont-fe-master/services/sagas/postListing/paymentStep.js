import { put, call, takeLatest } from 'redux-saga/effects';
import { getProductPackageApi, postPaymentStepApi } from '~/services/apis/postListing/paymentStepApi';
import {
  GET_PRODUCT_PACKAGE_LIST,
  PL_GET_PRODUCT_PACKAGE_LIST,
  POST_PAYMENT_STEP,
  PL_POST_PAYMENT_STEP,
} from '~/actions/BusinessActionTypes';

function* getProductPackageList() {
  const returnedData = yield call(getProductPackageApi);
  yield put({
    type: PL_GET_PRODUCT_PACKAGE_LIST,
    payload: returnedData,
  });
}

export function* watchGetProductPackageList() {
  yield takeLatest(GET_PRODUCT_PACKAGE_LIST, getProductPackageList);
}

function* postPaymentStep(action) {
  const data = action.payload;

  const returnedData = yield call(postPaymentStepApi, data);
  yield put({
    type: PL_POST_PAYMENT_STEP,
    payload: returnedData,
  });
}

export function* watchPostPaymentStep() {
  yield takeLatest(POST_PAYMENT_STEP, postPaymentStep);
}
