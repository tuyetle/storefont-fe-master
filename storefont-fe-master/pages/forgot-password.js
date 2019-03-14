import React, { PureComponent, Fragment } from 'react';
import { translate } from 'react-i18next';
import Head from 'next/head';
import Page from '~/containers/ForgotPassword/ForgotPassword';
import i18n from '~/shared/i18n';
import withReduxSaga from '~/stores';
import ModalRoute from '~/containers/ModalRoute/ModalRoute';
import { stylesheet } from '~/static/css/index.min.css';


const TPage = translate(['auth', 'common'], { i18n, wait: process.browser })(Page);

const TModal = translate(['auth', 'common'], { i18n, wait: process.browser })(ModalRoute);

class ForgotPassword extends PureComponent {
  static async getInitialProps({ req, isServer }) {
    let i18d = {};
    if (req && !process.browser) {
      i18d = i18n.getInitialProps(req, ['auth', 'common']);
    }
    return { isServer, ...i18d };
  }
  render() {
    return (
      <Fragment>
        <Head>
          <style type="text/css" data-css-index dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <TPage {...this.props} />
        <TModal />
      </Fragment>
    );
  }
}
export default withReduxSaga(ForgotPassword);
