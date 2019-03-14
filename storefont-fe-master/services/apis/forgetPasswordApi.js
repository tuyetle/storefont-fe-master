import axios from 'axios';
import gql from 'graphql-tag';
import { CHECK_FORGET_PASSWORD_TOKEN, UPDATE_PASSWORD } from '~/config/uri';
import apolloClient from './apolloProxy';

export function forgetPasswordApi(emailOrPhone = '') {
  return apolloClient.mutate({
    mutation: gql`
      mutation forgotPassword($emailOrPhone: String!) {
        forgotPassword(forgotPassword: {
          username: $emailOrPhone
        }) {
          data
        }
      }
    `,
    variables: {
      emailOrPhone,
    },
  });
}

export function checkForgetPasswordTokenApi(token = '') {
  return axios.get(CHECK_FORGET_PASSWORD_TOKEN, {
    params: {
      token,
    },
  });
}

export function updatePasswordApi(token = '', password = '') {
  return axios.post(UPDATE_PASSWORD, {
    params: {
      token,
      password,
    },
  });
}

export default { forgetPasswordApi, checkForgetPasswordTokenApi, updatePasswordApi };
