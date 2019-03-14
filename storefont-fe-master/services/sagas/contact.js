import { put, call, takeLatest } from 'redux-saga/effects';
import { postContactApi } from '~/services/apis/contact';
import {
  POST_CONTACT,
  POST_CONTACT_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* postContactStep(action) {
  const data = action.payload;

  yield call(postContactApi, data);
  yield put({
    type: POST_CONTACT_COMPLETED,
  });
}

export default function* watchPostContactStep() {
  yield takeLatest(POST_CONTACT, postContactStep);
}
