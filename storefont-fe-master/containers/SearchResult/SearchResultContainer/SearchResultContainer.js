import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
// import history from 'history';
import { Router } from '~/shared/routes';
import { PROPERTY_DETAIL } from '~/config/routerConfig';
import businessActions from '~/actions/BusinessActions';
import {
  SEARCH_LISTINGS,
  SEARCH_LISTING_MAP,
  SEARCH_ACTIVE_LISTING,
  SAVE_LISTING,
  GET_FACET_SEARCH,
  GET_LISTINGS_OF_A_GROUP,
} from '~/actions/BusinessActionTypes';
import SearchResultComponents from '~/components/SearchResultComponents/SearchResultComponents';
import { PAGE_SIZE } from '~/config/config';

import {
  makeSearchListings,
  makeSearchListingsOnMap,
  makeSearchActiveListing,
  makeGetFacetSearch,
  makeListingsOfGroupOnMap,
} from './SearchResultContainerSelector';

class SearchResultContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      showMap: this.props.showMap,
    };
  }

  // componentDidMount() {
  //   this.searchListing('', 1);
  //   this.searchListingsMap();
  // }

  onViewModeChanged = (mode) => {
    this.setState({
      viewMode: mode,
    });
  };

  onMapViewModeChanged = (show) => {
    this.setState({
      showMap: show,
    });
  };

  onPageChanged = (page) => {
    this.setState({
      currentPage: page,
    });
    this.searchListing('', page);
  };

  onActiveListing = (id) => {
    // Listing is active.
    if (this.props.searchActiveListing) {
      this.props.searchActiveListing(id);
    }
  }

  onListingSelected = (listing) => {
    Router.pushRoute(PROPERTY_DETAIL, {
      listingId: listing.id,
    });
    // history.push({
    //   pathname: PROPERTY_DETAIL,
    //   search: `?listingId=${listing.id}`,
    // });
  };
  onSortRusultChanged = (sortResult) => {
    this.props.searchListings({ sortResult });
  }
  onListingSaved = (listing) => {
    // in GUI, update current status of this listing from saved to unsaved and vice versa
    this.props.saveListing({ listingId: listing.id });
  };

  onMarkerGroupListingClick = (groupId) => {
    this.props.getListingsOfGroup(groupId);
  };


  searchListing(keys, currentPage) {
    this.props.searchListings({ keys, currentPage, pageSize: PAGE_SIZE });
  }

  searchListingsMap() {
    this.props.searchListingsMap();
  }

  normalizeListingsMapData = (data) => {
    let normalizedData = [];
    if (data) {
      normalizedData = data.map(item => ({
        text: item.price,
        id: item.id,
        geometry: {
          type: 'Point',
          coordinates: [item.center.lng, item.center.lat],
        },
        ...item,
      }));
    }

    return normalizedData;
  }

  render() {
    // if (this.props.results === undefined || this.props.listingsMapResults === undefined) {
    if (this.props.results === undefined) {
      return (<div />);
    }

    const { listings, foundItems } = this.props.results;
    let { listingsMapResult } = this.props.listingsMapResults;
    listingsMapResult = this.normalizeListingsMapData(listingsMapResult);
    const { facetSearchItems } = this.props;

    if (!foundItems) {
      return (<div />);
    }

    return (
      <SearchResultComponents
        foundItems={foundItems}
        listings={listings}
        listingsMapResult={listingsMapResult}
        listingsOfGroup={this.props.listingsOfGroup}
        facetSearchItems={facetSearchItems}
        currentPage={this.state.currentPage}
        pageSize={PAGE_SIZE}
        showMap={this.state.showMap}
        onSortRusultChanged={this.onSortRusultChanged}
        onViewModeChanged={this.onViewModeChanged}
        onMapViewModeChanged={this.onMapViewModeChanged}
        onPageChanged={this.onPageChanged}
        onListingSelected={this.onListingSelected}
        onListingSaved={this.onListingSaved}
        onActiveListing={this.onActiveListing}
        activeListingResults={this.props.activeListingResults}
        viewMode={this.state.viewMode}
        onMarkerGroupListingClick={this.onMarkerGroupListingClick}
        isServer
      />
    );
  }
}

SearchResultContainer.propTypes = {
  results: PropTypes.shape({
    listings: PropTypes.array.isRequired,
    foundItems: PropTypes.number.isRequired,
  }),
  listingsMapResults: PropTypes.shape({
    listingsMapResult: PropTypes.array,
    listingsMapFoundItems: PropTypes.number,
  }),
  listingsOfGroup: PropTypes.array,
  facetSearchItems: PropTypes.array,
  showMap: PropTypes.bool,
  activeListingResults: PropTypes.any,
  searchListings: PropTypes.func,
  searchListingsMap: PropTypes.func,
  searchActiveListing: PropTypes.func,
  saveListing: PropTypes.any,
  getListingsOfGroup: PropTypes.func.isRequired,
};

SearchResultContainer.defaultProps = {
  results: {
    listings: [],
    foundItems: 0,
  },
  listingsMapResults: {
    listingsMapResult: [],
    listingsMapFoundItems: 0,
  },
  listingsOfGroup: [],
  facetSearchItems: [],
  showMap: false,
  activeListingResults: {},
  searchListings: null,
  searchListingsMap: null,
  searchActiveListing: null,
  saveListing: null,
};

const mapStateToProps = createStructuredSelector({
  results: makeSearchListings(),
  listingsMapResults: makeSearchListingsOnMap(),
  listingsOfGroup: makeListingsOfGroupOnMap(),
  activeListingResults: makeSearchActiveListing(),
  facetSearchItems: makeGetFacetSearch(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      searchListings: businessActions[SEARCH_LISTINGS],
      searchListingsMap: businessActions[SEARCH_LISTING_MAP],
      searchActiveListing: businessActions[SEARCH_ACTIVE_LISTING],
      getListingsOfGroup: businessActions[GET_LISTINGS_OF_A_GROUP],
      saveListing: businessActions[SAVE_LISTING],
      getFacetSearch: businessActions[GET_FACET_SEARCH],
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchResultContainer);
