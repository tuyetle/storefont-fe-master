import { createSelector } from 'reselect';
import { UI_STATE } from '~/stores/uiState';

const selectUIState = state => state.get(UI_STATE);

const makeSelectCurrentModal = () => createSelector(
  selectUIState,
  state => state.get('currentModal') || null,
);

export {
  selectUIState,
  makeSelectCurrentModal,
};
