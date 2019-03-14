import React, { PureComponent, Fragment } from 'react';
import { translate } from 'react-i18next';
import Head from 'next/head';
import withHeader from '~/hocs/withHeader/withHeader';
import rehydrateStyles from '~/services/rehydrateStyles';
import withReduxSaga from '~/stores';
import i18n from '~/shared/i18n';

import Page from '~/containers/Login/Login';

import { stylesheet } from '~/static/css/search.min.css';

rehydrateStyles();

const LoginPage = translate(['auth', 'common'], { i18n, wait: process.browser })(withHeader(Page));

class Login extends PureComponent {
  static async getInitialProps({
    req, isServer,
  }) {
    if (req && !process.browser) {
      const initialProps = i18n.getInitialProps(req, ['auth', 'common']);
      return { ...initialProps };
    }

    return { isServer };
  }

  render() {
    return (
      <Fragment>
        <Head>
          <style type="text/css" data-css-search dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <LoginPage {...this.props} />
      </Fragment>);
  }
}

export default withReduxSaga(Login);
