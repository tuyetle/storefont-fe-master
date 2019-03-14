import { createSelector } from 'reselect';
import { SUGGESTION_STORE, SUGGESTION_LIST } from '~/stores/landingPage/suggestListingReducer';

const selectSuggestion = state => state.get(SUGGESTION_STORE);

const makeGetSuggestion = () => createSelector(
  selectSuggestion,
  state => state.get(SUGGESTION_LIST),
);

export {
  selectSuggestion,
  makeGetSuggestion,
};
