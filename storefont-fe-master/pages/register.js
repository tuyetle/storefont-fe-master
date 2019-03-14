import React, { PureComponent, Fragment } from 'react';
import { translate } from 'react-i18next';
import Head from 'next/head';
import load from 'load-script';
import Page from '~/containers/Registration/Registration';
import i18n from '~/shared/i18n';
import withReduxSaga from '~/stores';
import { stylesheet } from '~/static/css/index.min.css';
import canUseDOM from '#/services/domHelper';


const TPage = translate(['auth', 'common'], { i18n, wait: process.browser })(Page);

class Register extends PureComponent {
  static async getInitialProps({ req, isServer }) {
    let i18d = {};
    if (req && !process.browser) {
      i18d = i18n.getInitialProps(req, ['auth', 'common']);
    }
    return { isServer, ...i18d };
  }
  render() {
    if (canUseDOM) {
      load('https://www.google.com/recaptcha/api.js?hl=vi&render="explicit"');
    }
    return (
      <Fragment>
        <Head>
          <style type="text/css" data-css-index dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <TPage {...this.props} />
      </Fragment>
    );
  }
}
export default withReduxSaga(Register);
