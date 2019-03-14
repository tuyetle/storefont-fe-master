import { createSelector } from 'reselect';
import { AUTH_STORE } from '~/stores/auth';

const selectAuth = state => state.get(AUTH_STORE);

const makeAuthSelector = () => createSelector(
  selectAuth,
  state => ({
    token: state.get('token'),
    name: state.get('name'),
  }),
);

export {
  selectAuth,
  makeAuthSelector,
};
