import { createSelector } from 'reselect';
import {
  HIGHLIGHT_PROJECT_STORE,
  HIGHLIGHT_NEW_PROJECT_LIST,
  HIGHLIGHT_FEATURED_PROJECT_LIST,
} from '~/stores/highlightProjectReducer';

const selectLandingPage = state => state.get(HIGHLIGHT_PROJECT_STORE);

const makeGetNewHighlightProjects = () => createSelector(
  selectLandingPage,
  state => state.get(HIGHLIGHT_NEW_PROJECT_LIST),
);

const makeGetFeaturedHighlightProjects = () => createSelector(
  selectLandingPage,
  state => state.get(HIGHLIGHT_FEATURED_PROJECT_LIST),
);

export {
  selectLandingPage,
  makeGetNewHighlightProjects,
  makeGetFeaturedHighlightProjects,
};
