import { createSelector } from 'reselect';
import { AUTH_STORE, FORGET_PASSWORD_RESULT } from '~/stores/auth';

const selectAuth = state => state.get(AUTH_STORE);

const makeForgetPassowordSelector = () => createSelector(
  selectAuth,
  state => state.get(FORGET_PASSWORD_RESULT),
);

export {
  selectAuth,
  makeForgetPassowordSelector,
};
