import gql from 'graphql-tag';
import apolloClient from './apolloProxy';

export function loginApi(username = '', password = '', rememberMe = false) {
  return apolloClient.query({
    query: gql`
      query login($username: String!, $password: String!, $rememberMe: Boolean) {
        login(login: {username: $username, password: $password, rememberMe: $rememberMe }) {
          data {
            token
            refreshToken
          }
        }
      }
    `,
    fetchPolicy: 'network-only', // skip cache
    variables: {
      username,
      password,
      rememberMe,
    },
  })
    .catch(error => ({ errors: error.graphQLErrors }));
}
export function refreshTokenApi(refreshToken) {
  return apolloClient.query({
    query: gql`
    query refreshToken($refreshToken: String!) {
      refreshToken(refreshToken: $refreshToken) {
       data {
          token
          refreshToken
        }
      }
    }
  `,
    variables: {
      refreshToken,
    },
  })
    .catch(error => ({ errors: error.graphQLErrors }));
}
export function getMyProfileApi() {
  return apolloClient.query({
    query: gql`
    {
      getMyProfile {
        #TODO: remove status Code and add errors
        statusCode
        errorMessage
        data {
          name
          email
          phoneNumber
        }
      },
    }
  `,
  })
    .catch(error => ({ errors: error.graphQLErrors }));
}

export function registerApi(emailOrPhone = '', captcha = '', receiveNews = false) {
  return apolloClient.mutate({
    mutation: gql`
      mutation register($emailOrPhone: String!, $captcha: String!) {
        register(register: {username: $emailOrPhone, captcha: $captcha}) {
          #TODO: remove status Code and add errors
          statusCode
          errorMessage
          data
        }
      }
    `,
    variables: {
      emailOrPhone,
      captcha,
      receiveNews,
    },
  })
    .catch(error => ({ errors: error.graphQLErrors }));
}

export function logoutApi() {
  return apolloClient.mutate({
    mutation: gql`
    mutation{
      logout {
        #TODO: remove status Code and add errors
        statusCode
        errorMessage
      }
    }
  `,
  })
    .catch(error => ({ errors: error.graphQLErrors }));
}

export default {
  loginApi, logoutApi, registerApi, getMyProfileApi, refreshTokenApi,
};
