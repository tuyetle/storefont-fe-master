import Immutable from 'immutable';
import {
  GET_SUGGESTION,
  GET_SUGGESTION_COMPLETED,
} from '../actions/BusinessActionTypes';

export const SUGGESTION_STORE = 'suggestionStore';
export const SUGGESTION_LIST = 'suggestionResults';

const suggestListingReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_SUGGESTION:
    return state.set(SUGGESTION_STORE, action.payload);
  case GET_SUGGESTION_COMPLETED:
    return state.set(SUGGESTION_LIST, action.payload);
  default:
    return state;
  }
};

export default suggestListingReducer;
