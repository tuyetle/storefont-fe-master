import axios from 'axios';
import AuthenticationHelper from '~/services/authenticationHelper';
import { AUTHENTICATION_REQUEST } from '~/actions/BusinessActionTypes';

const authenticationMiddleware = store => next => (action) => {
  axios.defaults.headers.common.Authorization = `Bearer ${AuthenticationHelper.getToken()}`;
  const result = next(action);
  if (result) {
    const { payload } = result;
    if (payload && payload.response && payload.response.status === 401) {
      store.dispatch({
        type: AUTHENTICATION_REQUEST,
        payload: null,
      });
    }
  }

  return result;
};

export default authenticationMiddleware;
