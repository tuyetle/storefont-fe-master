import Immutable from 'immutable';
import { Router } from '~/shared/routes';
import { SEARCHING_RESULT } from '~/config/routerConfig';

import { SET_SEARCHING_CONDITIONS } from '~/actions/BusinessActionTypes';

export const SEARCHING_CONITIONS_STORE = 'searchingConditionsStore';

const searchingConditionsReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case SET_SEARCHING_CONDITIONS:
    // TODO: Should be refactor when routing service is completed
    Router.pushRoute(SEARCHING_RESULT);
    return state.set(SEARCHING_CONITIONS_STORE, action.payload);
  default:
    return state;
  }
};

export default searchingConditionsReducer;
