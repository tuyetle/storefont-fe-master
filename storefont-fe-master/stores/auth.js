import Immutable from 'immutable';
import {
  LOGIN_REQUEST,
  SET_AUTH,
  CLEAR_AUTH,
  FORGET_PASSWORD_SUCCEEDED,
  AUTHENTICATION_REQUEST_COMPLETED,
  CHECK_FORGET_PASSWORD_TOKEN_SUCCEEDED,
  UPDATE_PASSWORD_SUCCEEDED,
  GET_MY_PROFILE_SUCCEEDED,
  TOKEN,
  NAME,
  LOGIN_REQUEST_FAILED,
  REGISTRATION_REQUEST_FAILED,
  REGISTRATION_REQUEST_SUCCEEDED,
} from '~/actions/BusinessActionTypes';

export const AUTH_STORE = 'auth';
export const FORGET_PASSWORD_RESULT = 'forgetPasswordResult';
export const UPDATE_PASSWORD_RESULT = 'updatePasswordResult';
export const LOGIN_REQUEST_RESULT = 'loginRequestResult';
export const REGISTRATION_REQUEST_RESULT = 'registrationRequestResult';

const authReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case LOGIN_REQUEST:
    return state.set('welcome', `Welcome ${action.payload.username}`);
  case SET_AUTH:
    return state.set(TOKEN, action.payload.data.token);
  case CLEAR_AUTH:
    return Immutable.Map({});
  case FORGET_PASSWORD_SUCCEEDED:
    return state.set(FORGET_PASSWORD_RESULT, action.payload.data);
  case AUTHENTICATION_REQUEST_COMPLETED:
    return state.withMutations((map) => {
      map.delete('showLoginModal')
        .set('showLoginModal', true);
    });
  case LOGIN_REQUEST_FAILED: {
    return state.set(LOGIN_REQUEST_RESULT, action.payload);
  }
  case GET_MY_PROFILE_SUCCEEDED:
    return state.set(NAME, (action.payload.data.name || action.payload.data.email) ||
    action.payload.data.phoneNumber);
  case CHECK_FORGET_PASSWORD_TOKEN_SUCCEEDED:
  case UPDATE_PASSWORD_SUCCEEDED:
    return state.set(UPDATE_PASSWORD_RESULT, action.payload.data);

  case REGISTRATION_REQUEST_SUCCEEDED:
    return state.set(REGISTRATION_REQUEST_RESULT, true);

  case REGISTRATION_REQUEST_FAILED:
    return state.set(REGISTRATION_REQUEST_RESULT, false);

  default:
    return state;
  }
};

export default authReducer;
