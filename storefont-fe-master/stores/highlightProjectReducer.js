import Immutable from 'immutable';
import {
  GET_HIGHLIGHT_PROJECTS,
  GET_HIGHLIGHT_PROJECTS_SUCCEEDED,
} from '../actions/BusinessActionTypes';

export const HIGHLIGHT_PROJECT_STORE = 'highlightProjectStore';
export const HIGHLIGHT_NEW_PROJECT_LIST = 'highlightNewProjectList';
export const HIGHLIGHT_FEATURED_PROJECT_LIST = 'highlightFeaturedProjectList';

const highlightProjectReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_HIGHLIGHT_PROJECTS_SUCCEEDED:
    return state.set(HIGHLIGHT_NEW_PROJECT_LIST, action.payload.data.newListings)
      .set(HIGHLIGHT_FEATURED_PROJECT_LIST, action.payload.data.featuredlistings);
  default:
    return state;
  }
};

export function getHighlightProjects() {
  return { type: GET_HIGHLIGHT_PROJECTS };
}

export default highlightProjectReducer;
