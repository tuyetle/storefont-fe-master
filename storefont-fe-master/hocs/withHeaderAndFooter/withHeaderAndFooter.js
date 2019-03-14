import React, { Fragment } from 'react';
import Header from '~/containers/Header/Header';
import LPFooter from '~/components/LandingPageComponents/LPFooter/LPFooter';

const withHeaderAndFooter = WrappedComponent => wrappedComponentProps => (
  <Fragment>
    <Header url={wrappedComponentProps.url} />
    <WrappedComponent {...wrappedComponentProps} />
    <LPFooter />
  </Fragment>
);

export default withHeaderAndFooter;
