import React, { PureComponent, Fragment } from 'react';
import { translate } from 'react-i18next';
import Head from 'next/head';
import withHeader from '~/hocs/withHeader/withHeader';
import rehydrateStyles from '~/services/rehydrateStyles';
import businessActions from '~/actions/BusinessActions';
import { searchListingResult } from '~/stores/searchResult/searchListingReducer';
import { searchListingMapResult } from '~/stores/searchResult/searchMapListingReducer';
import { getFacetSearch } from '~/stores/searchResult/facetSearchReducer';
import { GET_SUGGESTION } from '~/actions/BusinessActionTypes';
import ModalRoute from '~/containers/ModalRoute/ModalRoute';
import withReduxSaga from '~/stores';
import i18n from '~/shared/i18n';

import Page from '~/containers/SearchResult/SearchResultContainerWrapper';

import { stylesheet } from '~/static/css/search.min.css';

rehydrateStyles();

const SearchResultPage = translate(['searchResult', 'common', 'postListingPayment'], { i18n, wait: process.browser })(withHeader(Page));
const TModal = translate(['auth', 'common'], { i18n, wait: process.browser })(ModalRoute);

class SearchResult extends PureComponent {
  static async getInitialProps({
    store, req, isServer, query,
  }) {
    store.dispatch(businessActions[GET_SUGGESTION]({ keyword: query.keyword || 'MOCK_DATA' }));
    store.dispatch(searchListingMapResult()); // dispatch the data stores for map.
    store.dispatch(searchListingResult());// dispatch the data stores for listings.
    store.dispatch(getFacetSearch());// dispatch the data stores for listings.

    if (req && !process.browser) {
      const initialProps = i18n.getInitialProps(req, ['searchResult', 'common', 'postListingPayment']);
      return { ...initialProps };
    }

    return { isServer, showMap: false };
  }

  render() {
    return (
      <Fragment>
        <Head>
          <style type="text/css" data-css-search dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <SearchResultPage />
        <TModal />
      </Fragment>);
  }
}

export default withReduxSaga(SearchResult);
