import Immutable from 'immutable';
import {
  GET_SEO_LINKS,
  GET_SEO_LINKS_COMPLETED,
} from '~/actions/BusinessActionTypes';

export const SEO_STORE = 'seoStore';
export const SEO_LINKS_LIST = 'seoLinks';

const seoReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_SEO_LINKS_COMPLETED:
    return state.set(SEO_LINKS_LIST, action.payload);
  default:
    return state;
  }
};

export function getSeoLinks() {
  return { type: GET_SEO_LINKS };
}

export default seoReducer;
