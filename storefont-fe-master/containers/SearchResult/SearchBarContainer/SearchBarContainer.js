import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { isEmpty, cloneDeep } from 'lodash';
import queryString from 'query-string';
import numeral from 'numeral';
import {
  SEARCH_LISTING_SUBMIT,
  SEARCH_LISTING_FORM_DATA_BINDING,
  GET_SUGGESTION,
  SAVE_SEARCH,
} from '~/actions/BusinessActionTypes';
import businessActions from '~/actions/BusinessActions';
import SearchBar from '~/components/SearchResultComponents/SearchBar/SearchBar';
import {
  makeSearchListingFormData,
  makeGetSuggestion,
  makeSearchListingSelectedData,
  makeSaveSearchResult,
} from './SearchBarContainerSelector';

class SearchBarContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.getSuggestions = this.getSuggestions.bind(this);

    this.state = { filtersFromUrl: this.getQueryValues() };
  }

  componentDidMount() {
    this.props.searchListingFormData();
  }

  getSuggestions = (keyword) => {
    this.props.getSuggestions({ keyword });
  };

  getQueryValues = () => {
    const filters = {};
    const queryFilters = queryString.parse(this.props.location.search);
    if (queryFilters.transactionType) {
      filters.transactionType = queryFilters.transactionType;
    }

    const priceRange = {};
    if (queryFilters.fromPrice) {
      priceRange.fromPrice = numeral(queryFilters.fromPrice).value();
    }

    if (queryFilters.toPrice) {
      priceRange.toPrice = numeral(queryFilters.toPrice).value();
    }

    if (!isEmpty(priceRange)) {
      filters.priceRange = priceRange;
    }

    const areaRange = {};
    if (queryFilters.fromArea) {
      areaRange.fromArea = numeral(queryFilters.fromArea).value();
    }

    if (queryFilters.toArea) {
      areaRange.toArea = numeral(queryFilters.toArea).value();
    }

    if (!isEmpty(areaRange)) {
      filters.areaRange = areaRange;
    }

    if (queryFilters.beds) {
      filters.beds = queryFilters.beds.split(',').map(item => numeral(item).value());
    }

    if (queryFilters.bathrooms) {
      filters.bathrooms = queryFilters.bathrooms.split(',').map(item => numeral(item).value());
    }

    const otherFilters = {};
    if (queryFilters.categoryIds) {
      areaRange.categoryIds = queryFilters.categoryIds.split(',');
    }

    if (queryFilters.directions) {
      areaRange.directions = queryFilters.directions.split(',');
    }

    if (queryFilters.utilities) {
      areaRange.utilities = queryFilters.utilities.split(',');
    }

    if (queryFilters.furnitures) {
      areaRange.furnitures = queryFilters.furnitures.split(',');
    }

    if (!isEmpty(otherFilters)) {
      filters.otherFilters = otherFilters;
    }

    return filters;
  }

  changeURL = () => {
    // Router.push(`?${params}`);
  }

  render() {
    const {
      handleSearchSubmit, suggestions, location,
      searchFormDataDefault,
      selectedFilter,
    } = this.props;

    let bindingValue = {
      categories: [],
      furnitures: [],
      utilities: [],
    };

    if (!isEmpty(searchFormDataDefault)) {
      bindingValue = searchFormDataDefault;
    }

    let selectedSuggestion;
    if (location && location.state) {
      selectedSuggestion = {
        value: location.state.id,
        label: location.state.keyword,
      };
    }

    let filterValues = selectedFilter;
    if (isEmpty(filterValues)) {
      filterValues = cloneDeep(this.state.filtersFromUrl);
    }

    return (
      <SearchBar
        {...this.props}
        categories={bindingValue.categories}
        furnitures={bindingValue.furnitures}
        utilities={bindingValue.utilities}
        selectedFilter={filterValues}
        selectedSuggestion={selectedSuggestion}
        searchListing={handleSearchSubmit}
        suggestions={suggestions}
        changeURL={this.changeURL}
        getSuggestions={this.getSuggestions}
        saveSearchResult={this.props.saveSearchResult}
      />
    );
  }
}

SearchBarContainer.propTypes = {
  handleSearchSubmit: PropTypes.func.isRequired,
  searchListingFormData: PropTypes.func.isRequired,
  suggestions: PropTypes.array,
  getSuggestions: PropTypes.func.isRequired,
  saveSearch: PropTypes.func.isRequired,
  searchFormDataDefault: PropTypes.object,
  saveSearchResult: PropTypes.object,
  selectedFilter: PropTypes.object,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
};

SearchBarContainer.defaultProps = {
  suggestions: [],
  selectedFilter: {},
  saveSearchResult: {},
  searchFormDataDefault: {},
  location: { search: '' },
};

const mapStateToProps = createStructuredSelector({
  suggestions: makeGetSuggestion(),
  saveSearchResult: makeSaveSearchResult(),
  searchFormDataDefault: makeSearchListingFormData(),
  selectedFilter: makeSearchListingSelectedData(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      handleSearchSubmit: businessActions[SEARCH_LISTING_SUBMIT],
      getSuggestions: businessActions[GET_SUGGESTION],
      searchListingFormData: businessActions[SEARCH_LISTING_FORM_DATA_BINDING],
      saveSearch: businessActions[SAVE_SEARCH],
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBarContainer);
