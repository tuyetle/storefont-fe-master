import { fork } from 'redux-saga/effects';
import { watchGetProductPackageList, watchPostPaymentStep } from '~/services/sagas/postListing/paymentStep';
// import {
//     watchGetPlInitData,
//     watchSearchProjects,
//     watchGetProjectById,
//     watchSelectCategoryById,
//     watchSelectCityById,
//     watchSelectDistrictById,
//     watchGetLatLngByAddress,
//     watchSaveProperty,
// } from '~/services/sagas/postListing/propertyStep';
import watchPostContactStep from '~/services/sagas/contact';
import watchPostListingStep from '~/services/sagas/postListing/listingStep';
import { watchSearchListings, watchSearchListingsMap, watchSearchActiveListings, watchGetListingOfGroup } from './searchListings';
import watchGetPropertyDetail from './propertyDetail';
import watchGetListingSuggestion from './listingSuggestion';
import { watchForgetPassword, watchCheckForgetPasswordToken, watchUpdatePassword } from './forgetPassword';
import {
  watchLogin,
  watchLogout,
  watchRegister,
  watchOpenLoginFormModal,
  watchGetMyProfile,
  watchCheckAuth,
} from './auth';
import {
  watchSearchListingSubmitForm,
  watchSearchListingFormData,
  watchSaveSearch,
} from './searchResult/searchListingForm';
import watchGetLatestNews from './news';
import watchGetHighlightProperties from './highlightProperty';
import watchGetHighlightProjects from './highlightProject';
import watchGetSeoLinks from './seo';

import watchSaveListing from './saveListing';
import watchGetFacetSearch from './searchResult/facetSearch';

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchLogout);
  yield fork(watchRegister);
  yield fork(watchOpenLoginFormModal);
  yield fork(watchSearchListings);
  yield fork(watchSearchListingsMap);
  yield fork(watchSearchActiveListings);
  yield fork(watchGetFacetSearch);
  yield fork(watchGetProductPackageList);
  yield fork(watchPostPaymentStep);

  // yield fork(watchGetPlInitData);
  // yield fork(watchSearchProjects);
  // yield fork(watchGetProjectById);
  // yield fork(watchSelectCategoryById);
  // yield fork(watchSelectCityById);
  // yield fork(watchSelectDistrictById);
  // yield fork(watchGetLatLngByAddress);
  // yield fork(watchSaveProperty);

  yield fork(watchGetPropertyDetail);
  yield fork(watchPostListingStep);
  yield fork(watchPostContactStep);
  yield fork(watchGetListingSuggestion);
  yield fork(watchSearchListingSubmitForm);
  yield fork(watchSearchListingFormData);

  yield fork(watchGetLatestNews);
  yield fork(watchGetHighlightProperties);
  yield fork(watchGetHighlightProjects);
  yield fork(watchGetSeoLinks);
  yield fork(watchSaveListing);
  yield fork(watchForgetPassword);
  yield fork(watchCheckForgetPasswordToken);
  yield fork(watchUpdatePassword);
  yield fork(watchSaveSearch);
  yield fork(watchGetListingOfGroup);
  yield fork(watchGetMyProfile);
  yield fork(watchCheckAuth);
}
