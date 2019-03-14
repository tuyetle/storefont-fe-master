import { put, takeLatest } from 'redux-saga/effects';
import saveListingApi from '~/services/apis/saveListingApi';
import {
  SAVE_LISTING,
  SAVE_LISTING_SUCCEEDED,
  SAVE_LISTING_FAILED,
} from '~/actions/BusinessActionTypes';
import { callAndCheckToken as call } from './callAndCheckToken';

function* saveListing(action) {
  try {
    const { listingId } = action.payload;
    yield call(saveListingApi, listingId);
    yield put({
      type: SAVE_LISTING_SUCCEEDED,
      payload: listingId,
    });
  } catch (err) {
    yield put({
      type: SAVE_LISTING_FAILED,
      payload: err,
    });
  }
}

export default function* watchSaveListing() {
  yield takeLatest(SAVE_LISTING, saveListing);
}
