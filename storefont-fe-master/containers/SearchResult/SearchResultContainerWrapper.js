import React, { Fragment } from 'react';
import SearchResultContainer from './SearchResultContainer/SearchResultContainer';
import SearchBarContainer from './SearchBarContainer/SearchBarContainer';

const SearchResultContainerWrapper = props => (
  <Fragment>
    <SearchBarContainer {...props} />
    <SearchResultContainer {...props} />
  </Fragment>
);

export default SearchResultContainerWrapper;
