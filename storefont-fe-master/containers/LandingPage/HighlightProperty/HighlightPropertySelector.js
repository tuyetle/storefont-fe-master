import { createSelector } from 'reselect';
import {
  HIGHLIGHT_PROPERTY_STORE,
  HIGHLIGHT_NEW_PROPERTY_LIST,
  HIGHLIGHT_FEATURED_PROPERTY_LIST,
} from '~/stores/highlightPropertyReducer';

const selectLandingPage = state => state.get(HIGHLIGHT_PROPERTY_STORE);

const makeGetNewHighlightProperties = () => createSelector(
  selectLandingPage,
  state => state.get(HIGHLIGHT_NEW_PROPERTY_LIST),
);

const makeGetFeaturedHighlightProperties = () => createSelector(
  selectLandingPage,
  state => state.get(HIGHLIGHT_FEATURED_PROPERTY_LIST),
);

export {
  selectLandingPage,
  makeGetNewHighlightProperties,
  makeGetFeaturedHighlightProperties,
};
