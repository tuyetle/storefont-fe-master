import Immutable from 'immutable';
import {
  GET_LATEST_NEWS,
  GET_LATEST_NEWS_COMPLETED,
} from '~/actions/BusinessActionTypes';

export const NEWS_STORE = 'newsStore';
export const LATEST_NEWS_LIST = 'latestNews';

const newsReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_LATEST_NEWS_COMPLETED:
    return state.set(LATEST_NEWS_LIST, action.payload);
  default:
    return state;
  }
};

export function getLastestNews() {
  return { type: GET_LATEST_NEWS };
}

export default newsReducer;
