import Immutable from 'immutable';
import {
  GET_HIGHLIGHT_PROPERTIES,
  GET_HIGHLIGHT_PROPERTIES_SUCCEEDED,
} from '../actions/BusinessActionTypes';

export const HIGHLIGHT_PROPERTY_STORE = 'highlightPropertyStore';
export const HIGHLIGHT_NEW_PROPERTY_LIST = 'highlightNewPropertyList';
export const HIGHLIGHT_FEATURED_PROPERTY_LIST = 'highlightFeaturedPropertyList';

const highlightPropertyReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_HIGHLIGHT_PROPERTIES_SUCCEEDED:
    return state.set(HIGHLIGHT_NEW_PROPERTY_LIST, action.payload.data.newListings)
      .set(HIGHLIGHT_FEATURED_PROPERTY_LIST, action.payload.data.featuredlistings);
  default:
    return state;
  }
};

export function getHighlightProperties() {
  return { type: GET_HIGHLIGHT_PROPERTIES };
}

export default highlightPropertyReducer;
