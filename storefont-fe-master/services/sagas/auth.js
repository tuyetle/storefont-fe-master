import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  TOKEN, SET_AUTH,
  CLEAR_AUTH,
  CHECK_AUTH,
  REGISTRATION_REQUEST,
  REGISTRATION_REQUEST_FAILED,
  REGISTRATION_REQUEST_SUCCEEDED,
  AUTHENTICATION_REQUEST,
  AUTHENTICATION_REQUEST_COMPLETED,
  GET_MY_PROFILE,
  GET_MY_PROFILE_SUCCEEDED,
  LOGIN_REQUEST_FAILED,
} from '~/actions/BusinessActionTypes';
import { TOKEN_EXPIRED_CODE, TOKEN_INVALID_CODE } from '~/const/ResponseCode';
import { Router } from '~/shared/routes';
import { put, call, takeLatest } from 'redux-saga/effects';
import { setCookie, setCookieToExpiryAfterDays, getCookie, removeCookie } from '~/services/cookies';
import { loginApi, logoutApi, registerApi, getMyProfileApi, refreshTokenApi } from '~/services/apis/auth';
import { OPEN_MODAL, CLOSE_MODAL } from '~/actions/UIActionTypes';
import { EXPIRED_TIME_COOKIE, REMEMBER_ME_EXPIRED_TIME_COOKIE } from '~/config/config';
import { isNil, isArray } from 'lodash';

const REFRESH_TOKEN = 'refreshToken';
const openNavigationModalAction = {
  type: OPEN_MODAL,
  payload: {
    currentModal: 'information',
    configUI: {
      shouldTranslateText: true,
    },
    data: {
      text: 'expiredTokenMessage',
    },
  },
};

function* checkAuthSuccess(token) {
  yield put({
    type: SET_AUTH,
    payload: { data: { [TOKEN]: token } },
  });
  yield put({
    type: GET_MY_PROFILE,
  });
}

function* login(action) {
  const {
    username, password, rememberMe, isModal,
  } = action.payload;
  const userData = yield call(loginApi, username, password, rememberMe);
  // Dispatch action SET_AUTH to store auth state
  const { errors } = userData;

  if (isArray(errors) && errors.length > 0) {
    yield put({
      type: LOGIN_REQUEST_FAILED,
      payload: userData.errors,
    });
  } else {
    const loginData = userData.data.login;
    setCookieToExpiryAfterDays(TOKEN, loginData.data.token, EXPIRED_TIME_COOKIE);
    if (rememberMe) {
      setCookieToExpiryAfterDays(
        REFRESH_TOKEN,
        loginData.data.refreshToken,
        REMEMBER_ME_EXPIRED_TIME_COOKIE,
      );
    }

    yield call(checkAuthSuccess, loginData.data.token);
    if (isModal) {
      yield put({
        type: CLOSE_MODAL,
      });
    } else {
      const { urlBack } = Router.query;
      Router.pushRoute(urlBack || '/');
    }
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export function* getTokenFromRefreshToken() {
  let rToken = getCookie(REFRESH_TOKEN);

  if (isNil(rToken)) {
    yield put(openNavigationModalAction);
  } else {
    const refreshTokenData = yield call(refreshTokenApi, rToken);
    if (isArray(refreshTokenData.errors) && refreshTokenData.errors.length > 0) {
      rToken = null;
      yield put(openNavigationModalAction);
    } else {
      const { refreshToken } = refreshTokenData.data;
      rToken = refreshToken.data.token;
      setCookieToExpiryAfterDays(TOKEN, refreshToken.data.token, EXPIRED_TIME_COOKIE);
      setCookie(REFRESH_TOKEN, refreshToken.data.refreshToken);
      yield put({
        type: SET_AUTH,
        payload: { data: { [TOKEN]: refreshToken.data.token } },
      });
    }
  }

  return rToken;
}

function* checkAuth() {
  const tokenValue = getCookie(TOKEN);
  if (!isNil(tokenValue)) {
    const userData = yield call(getMyProfileApi);

    // TODO: move errors array into data api
    const { errors } = userData || userData.data.getMyProfile;
    const statusCode = (isArray(errors) && errors.length > 0) ? errors[0].statusCode : null;
    if (
      statusCode === TOKEN_EXPIRED_CODE ||
      statusCode === TOKEN_INVALID_CODE
    ) {
      removeCookie(TOKEN);
      yield put({
        type: CLEAR_AUTH,
      });
    } else {
      yield put({
        type: SET_AUTH,
        payload: { data: { [TOKEN]: tokenValue } },
      });
      yield put({
        type: GET_MY_PROFILE_SUCCEEDED,
        payload: userData.data.getMyProfile,
      });
    }
  }
}

export function* watchCheckAuth() {
  yield takeLatest(CHECK_AUTH, checkAuth);
}

function* getMyProfile() {
  const userData = yield call(getMyProfileApi);
  if (userData) {
    const { errors } = userData;
    const statusCode = (isArray(errors) && errors.length > 0) ? errors[0].statusCode : null;
    if (
      statusCode === TOKEN_EXPIRED_CODE ||
      statusCode === TOKEN_INVALID_CODE
    ) {
      // remove if expired token
      removeCookie(TOKEN);
      removeCookie(REFRESH_TOKEN);
      yield put({
        type: CLEAR_AUTH,
      });
    } else {
      yield put({
        type: GET_MY_PROFILE_SUCCEEDED,
        payload: userData.data.getMyProfile,
      });
    }
  }
}

export function* watchGetMyProfile() {
  yield takeLatest(GET_MY_PROFILE, getMyProfile);
}

function* logout() {
  yield call(logoutApi);
  removeCookie(TOKEN);
  removeCookie(REFRESH_TOKEN);
  yield put({
    type: CLEAR_AUTH,
  });
}

export function* watchLogout() {
  yield takeLatest(LOGOUT_REQUEST, logout);
}

function* register(action) {
  try {
    const { emailOrPhone, receiveNews, captcha } = action.payload;
    yield call(registerApi, emailOrPhone, captcha, receiveNews);

    yield put({
      type: REGISTRATION_REQUEST_SUCCEEDED,
      payload: true,
    });
  } catch (err) {
    yield put({
      type: REGISTRATION_REQUEST_FAILED,
      payload: err,
    });
  }
}

export function* watchRegister() {
  yield takeLatest(REGISTRATION_REQUEST, register);
}

function* openLoginFormModal() {
  yield put({
    type: AUTHENTICATION_REQUEST_COMPLETED,
    payload: null,
  });
}

export function* watchOpenLoginFormModal() {
  yield takeLatest(AUTHENTICATION_REQUEST, openLoginFormModal);
}
