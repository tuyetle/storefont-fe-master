import Immutable from 'immutable';
import {
  SEARCH_LISTING_FORM_DATA_BINDING,
  SEARCH_LISTING_FORM_DATA_BINDING_COMPLETED,
  SAVE_SEARCH_SUCCEEDED,
} from '../../actions/BusinessActionTypes';

export const SEARCH_LISTING_FORM_DATA = 'searchListingFormData';
export const SAVE_SEARCH_RESULT = 'saveSearchResult';

const searchListingFormReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case SEARCH_LISTING_FORM_DATA_BINDING:
    return state;

  case SEARCH_LISTING_FORM_DATA_BINDING_COMPLETED:
    return state.set(SEARCH_LISTING_FORM_DATA, action.payload);
  case SAVE_SEARCH_SUCCEEDED:
    return state.set(SAVE_SEARCH_RESULT, action.payload.data);
  default:
    return state;
  }
};

export default searchListingFormReducer;
