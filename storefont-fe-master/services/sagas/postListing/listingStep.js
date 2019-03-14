import { put, takeEvery } from 'redux-saga/effects';
// import { postListingStepApi } from '~/services/apis/postListing/listingStepApi';
import {
  POST_PL_LISTING,
  POST_PL_LISTING_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* postListingStep(action) {
  const data = action.payload;

  // const returnedData = yield call(postListingStepApi, data);
  const returnedData = data;
  yield put({
    type: POST_PL_LISTING_COMPLETED,
    payload: returnedData,
  });
}

export default function* watchPostListingStep() {
  yield takeEvery(POST_PL_LISTING, postListingStep);
}
