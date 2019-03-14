import { createActions } from 'redux-actions';
import * as actionTypes from './UIActionTypes';

export default createActions({}, ...Object.values(actionTypes));
