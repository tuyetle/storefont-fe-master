import Immutable from 'immutable';
import {
  GET_SUGGESTION_COMPLETED,
  RESET_SUGGESTION,
} from '~/actions/BusinessActionTypes';

export const SUGGESTION_STORE = 'suggestionStore';
export const SUGGESTION_LIST = 'suggestionResults';

const suggestListingReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_SUGGESTION_COMPLETED:
    return state.set(SUGGESTION_LIST, action.payload);
  case RESET_SUGGESTION:
    return state.set(SUGGESTION_LIST, Immutable.Map({}));
  default:
    return state;
  }
};

export default suggestListingReducer;
