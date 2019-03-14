import { put, call, takeLatest } from 'redux-saga/effects';
import {
  forgetPasswordApi,
  checkForgetPasswordTokenApi,
  updatePasswordApi,
} from '~/services/apis/forgetPasswordApi';
import {
  FORGET_PASSWORD,
  UPDATE_PASSWORD,
  FORGET_PASSWORD_SUCCEEDED,
  CHECK_FORGET_PASSWORD_TOKEN_SUCCEEDED,
  UPDATE_PASSWORD_SUCCEEDED,
  FORGET_PASSWORD_FAILED,
  CHECK_FORGET_PASSWORD_TOKEN,
} from '~/actions/BusinessActionTypes';

export function* forgetPassword(action) {
  try {
    const { emailOrPhone } = action.payload;
    const { data } = yield call(forgetPasswordApi, emailOrPhone);
    yield put({
      type: FORGET_PASSWORD_SUCCEEDED,
      payload: { data },
    });
  } catch (error) {
    yield put({
      type: FORGET_PASSWORD_FAILED,
      payload: error,
    });
  }
}

export function* watchForgetPassword() {
  yield takeLatest(FORGET_PASSWORD, forgetPassword);
}
function* checkForgetPasswordToken(action) {
  const { token } = action.payload;
  const { data } = yield call(checkForgetPasswordTokenApi, token);
  yield put({
    type: CHECK_FORGET_PASSWORD_TOKEN_SUCCEEDED,
    payload: { data },
  });
}

export function* watchCheckForgetPasswordToken() {
  yield takeLatest(CHECK_FORGET_PASSWORD_TOKEN, checkForgetPasswordToken);
}

function* updatePassword(action) {
  const { token, password } = action.payload;
  const { data } = yield call(updatePasswordApi, token, password);
  yield put({
    type: UPDATE_PASSWORD_SUCCEEDED,
    payload: { data },
  });
}
export function* watchUpdatePassword() {
  yield takeLatest(UPDATE_PASSWORD, updatePassword);
}
