import { isArray, isFunction, includes } from 'lodash';
import { call } from 'redux-saga/effects';
import { TOKEN_INVALID_CODE, TOKEN_EXPIRED_CODE } from '~/const/ResponseCode';
import { getTokenFromRefreshToken } from './auth';


export function checkTokenIsExpiredOrInvalid(errors) {
  if (isArray(errors) && errors.length > 0) {
    return includes(errors, TOKEN_EXPIRED_CODE) || includes(errors, TOKEN_INVALID_CODE);
  }

  return false;
}

export function* callAndCheckToken(fn, queryName, ...args) {
  let response = null;

  if (isFunction(fn)) {
    response = yield call(fn, ...args);

    const { errors } = response || response.data[queryName];
    if (response && response.data &&
      response.data[queryName] &&
      checkTokenIsExpiredOrInvalid(errors)) {
      const rToken = yield getTokenFromRefreshToken();
      if (rToken) {
        response = yield call(fn, ...args);
      }
    }
  }

  return response;
}

export default callAndCheckToken;
