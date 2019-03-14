import { createSelector } from 'reselect';
import { AUTH_STORE, LOGIN_REQUEST_RESULT } from '~/stores/auth';

const selectAuth = state => state.get(AUTH_STORE);

const getLoginError = () => createSelector(
  selectAuth,
  state => ({
    errors: state.get(LOGIN_REQUEST_RESULT),
  }),
);
export {
  selectAuth,
  getLoginError,
};
