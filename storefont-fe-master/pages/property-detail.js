import React, { PureComponent, Fragment } from 'react';
import { translate } from 'react-i18next';
import withHeaderAndFooter from '~/hocs/withHeaderAndFooter/withHeaderAndFooter';
import Head from 'next/head';
import rehydrateStyles from '~/services/rehydrateStyles';
import { getPropertyDetail } from '~/stores/propertyReducer';
import withReduxSaga from '~/stores';
import i18n from '~/shared/i18n';
import ModalRoute from '~/containers/ModalRoute/ModalRoute';
import Page from '~/containers/PropertyDetail/PropertyDetail';
import queryString from 'query-string';

import { stylesheet } from '~/static/css/detail.min.css';

rehydrateStyles();

const TPage = translate(['propertyDetail', 'lPFooter', 'common', 'postListingPayment'], { i18n, wait: process.browser })(withHeaderAndFooter(Page, true));
const TModal = translate(['auth', 'common'], { i18n, wait: process.browser })(ModalRoute);

class PropertyDetailPage extends PureComponent {
  static async getInitialProps({ store, req, isServer }) {
    const { url } = req || { url: '' };
    const parsed = queryString.parse(url);
    const { listingId } = parsed;
    store.dispatch(getPropertyDetail(listingId));

    if (req && !process.browser) {
      const initialProps = i18n.getInitialProps(req, ['propertyDetail', 'lPFooter', 'common', 'postListingPayment']);
      return { ...initialProps, location: url };
    }

    return { isServer, url };
  }
  render() {
    return (
      <Fragment>
        <Head>
          <style type="text/css" data-css-detail dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <TPage {...this.props} />
        <TModal />
      </Fragment>);
  }
}

export default withReduxSaga(PropertyDetailPage);
