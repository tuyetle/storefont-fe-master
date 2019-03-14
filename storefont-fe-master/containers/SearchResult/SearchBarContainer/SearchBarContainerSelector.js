import { createSelector } from 'reselect';
import { flatMap, flatMapDeep } from 'lodash';
import { SUGGESTION_STORE, SUGGESTION_LIST } from '~/stores/landingPage/suggestListingReducer';
import { SEARCH_LISTING_FORM_DATA, SAVE_SEARCH_RESULT } from '~/stores/searchResult/searchListingForm';
import { LISTING_RESULT_STORE, LISTING_FILTERS } from '~/stores/searchResult/searchListingReducer';

// FIXME Reusing selectSuggestion of the auto-suggestion in landingpage
const selectSuggestion = state => state.get(SUGGESTION_STORE);
const searchListingFormData = state => state.get(SEARCH_LISTING_FORM_DATA);
// const selectedFilter = state => state.get('form').get('SearchBarForm').get('values');
const selectedFilter = state => state.get(LISTING_RESULT_STORE);

const makeSearchListingFormData = () => createSelector(
  searchListingFormData,
  searchListingFormState => searchListingFormState.get(SEARCH_LISTING_FORM_DATA),
);
const makeSaveSearchResult = () => createSelector(
  searchListingFormData,
  state => state.get(SAVE_SEARCH_RESULT),
);
const makeGetSuggestion = () => createSelector(
  selectSuggestion,
  (state) => {
    let suggestionList = state.get(SUGGESTION_LIST);
    suggestionList = suggestionList.toJS ? suggestionList.toJS() : suggestionList;
    suggestionList = suggestionList.data ? suggestionList.data : suggestionList;
    const suggestion = flatMap(suggestionList);
    const result = flatMapDeep(suggestion.map((item) => {
      if (item && item.properties) {
        return item.properties;
      }
      return [];
    }));

    return result.map(item => ({
      value: item.id || null,
      label: item.resultText || '',
    }));
  },
);

const makeSearchListingSelectedData = () => createSelector(
  selectedFilter,
  state => state.get(LISTING_FILTERS),
);

export {
  selectSuggestion,
  makeGetSuggestion,
  makeSaveSearchResult,
  searchListingFormData,
  makeSearchListingFormData,
  makeSearchListingSelectedData,
};
