import React, { PureComponent, Fragment } from 'react';
import { translate } from 'react-i18next';
import Head from 'next/head';

import Page from '~/containers/LandingPage/LandingPage';
import withReduxSaga from '~/stores';
import i18n from '~/shared/i18n';
import withHeaderAndFooter from '~/hocs/withHeaderAndFooter/withHeaderAndFooter';
import { getLastestNews } from '~/stores/newsReducer';
import { getHighlightProperties } from '~/stores/highlightPropertyReducer';
import { getHighlightProjects } from '~/stores/highlightProjectReducer';
import { getSeoLinks } from '~/stores/seoReducer';
import rehydrateStyles from '~/services/rehydrateStyles';
import ModalRoute from '~/containers/ModalRoute/ModalRoute';

import { stylesheet } from '~/static/css/index.min.css';

rehydrateStyles();

const TPage = translate(['landingPage', 'lPFooter', 'common'], { i18n, wait: process.browser })(withHeaderAndFooter(Page));

const TModal = translate(['auth', 'common'], { i18n, wait: process.browser })(ModalRoute);

class LandingPage extends PureComponent {
  static async getInitialProps({ store, req, isServer }) {
    store.dispatch(getLastestNews());
    store.dispatch(getHighlightProperties());
    store.dispatch(getHighlightProjects());
    store.dispatch(getSeoLinks());
    let i18d = {};
    if (req && !process.browser) {
      i18d = i18n.getInitialProps(req, ['landingPage', 'lPFooter', 'common']);
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

export default withReduxSaga(LandingPage);
