import Immutable from 'immutable';
import {
  OPEN_MODAL,
  CLOSE_MODAL,
} from '~/actions/UIActionTypes';

export const UI_STATE = 'uiState';

const uiState = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case OPEN_MODAL:
    return state.withMutations((map) => {
      map.delete('currentModal')
        .set('currentModal', action.payload);
    });
  case CLOSE_MODAL:
    return state.withMutations((map) => {
      map.delete('currentModal');
    });
  default:
    return state;
  }
};

export default uiState;
