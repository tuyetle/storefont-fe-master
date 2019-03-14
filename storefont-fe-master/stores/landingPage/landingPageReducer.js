import Immutable from 'immutable';
import { GET_LATEST_NEWS_COMPLETED } from '../actions/BusinessActionTypes';

export const LANDING_PAGE_STORE = 'landingPageStore';
export const LATEST_NEWS_LIST = 'latestNews';

const suggestListingReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_LATEST_NEWS_COMPLETED:
    return state.set(LATEST_NEWS_LIST, action.payload);
  default:
    return state;
  }
};

export default suggestListingReducer;
