import { createSelector } from 'reselect';

import { AUTH_STORE, REGISTRATION_REQUEST_RESULT } from '~/stores/auth';

const selectAuth = state => state.get(AUTH_STORE);

const getRegistrationRequestResultSelector = () => createSelector(
  selectAuth,
  state => state.get(REGISTRATION_REQUEST_RESULT),
);

export {
  selectAuth,
  getRegistrationRequestResultSelector,
};
