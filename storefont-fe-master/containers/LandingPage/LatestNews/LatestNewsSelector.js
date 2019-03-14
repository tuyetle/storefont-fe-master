import { createSelector } from 'reselect';
import { NEWS_STORE, LATEST_NEWS_LIST } from '~/stores/newsReducer';

const selectLandingPage = state => state.get(NEWS_STORE);

const makeGetLatestNews = () => createSelector(
  selectLandingPage,
  state => state.get(LATEST_NEWS_LIST),
);

export {
  selectLandingPage,
  makeGetLatestNews,
};
