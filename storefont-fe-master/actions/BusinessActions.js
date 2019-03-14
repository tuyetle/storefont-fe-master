import { createActions } from 'redux-actions';
import * as actionTypes from './BusinessActionTypes';
// import * as propertyActionTypes from './propertyActionTypes';

// const actionWithWrapper = type => id =>
//   createAction(type, payload => ({ id, value: payload }));


// const businessActionsValues = Object.values(propertyActionTypes);
// export const businessActions = businessActionsValues.reduce(
//   (prev, type) => {
//       const next = prev;
//       next[type] = actionWithWrapper(type);
//       return next;
//   }, {});
const businessActions = createActions({}, ...Object.values(actionTypes));

export default { ...businessActions };
