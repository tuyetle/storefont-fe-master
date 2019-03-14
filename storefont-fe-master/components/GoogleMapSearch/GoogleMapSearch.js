import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';
import supercluster from 'supercluster';
import { noop } from 'lodash';
import { Mobile } from '~/config/media';
import GoogleSearchMapConst from '~/const/GoogleSearchMapConst';

import ListingMarker from './Marker/ListingMarker';
import GroupListingsMarker from './Marker/GroupListingsMarker';
import { ClusterMarker } from './Marker/ClusterMarker';
import SvgCloseIcon from './icons/ic-close.svg';
import styles from './styles';

class GoogleMapSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapOptionsCenter: this.props.defaultCenter,
      mapOptionsZoom: this.props.defaultZoom,
      markerClicked: '',
      clusters: [],
      supercluster: supercluster({
        minZoom: GoogleSearchMapConst.MIN_ZOOM,
        maxZoom: GoogleSearchMapConst.MAX_ZOOM,
        radius: GoogleSearchMapConst.RADIUS,
      }),
    };
    this.onMarkerCloseButtonClick = this.onMarkerCloseButtonClick.bind(this);
    this.onMarkerListingClick = this.onMarkerListingClick.bind(this);
    this.onMarkerClusterClick = this.onMarkerClusterClick.bind(this);
    this.onMarkerGroupListingClick = this.onMarkerGroupListingClick.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.clusters.length > 0) {
      this.createClusters(nextProps);
    }
  }

  onMarkerCloseButtonClick() {
    this.setState({ markerClicked: '' });
  }

  onMarkerListingClick(childProps) {
    if (childProps.id) {
      this.setState({ markerClicked: childProps.id });
      if (this.props.onActiveListing) {
        this.props.onActiveListing(childProps.listingID);
      }
    }
  }

  onMarkerGroupListingClick(group) {
    this.setState({ markerClicked: group.id });
    this.props.onMarkerGroupListingClick(group.id);
  }

  onMarkerClusterClick = (childProps) => {
    if (childProps.numPoints > 1) {
      const zoom = this.state.supercluster.getClusterExpansionZoom(childProps.clusterId);
      this.setState({
        mapOptionsZoom: zoom,
        mapOptionsCenter: {
          lat: childProps.lat,
          lng: childProps.lng,
        },
      });
    }
  };

  onClose = () => {
    this.props.onMapViewModeChanged(false);
  }

  getClusters = (props) => {
    // TODO: Mocking function which should be removed
    // The clusters will be returned from server
    if (props.markersData.length === 0) {
      return [];
    }

    this.state.supercluster.load(props.markersData);
    const { nw, se } = this.state.mapOptionsBounds;

    return this.state.supercluster.getClusters(
      [nw.lng, se.lat, se.lng, nw.lat],
      this.state.mapOptionsZoom,
    );
  }

  createClusters = (props) => {
    // TODO: Mocking function which should be removed
    // The clusters will be returned from server
    const clusters = this.getClusters(props);
    if (clusters.length === 0) {
      this.setState({ clusters: [] });
      return;
    }
    this.setState({
      clusters: this.state.mapOptionsBounds ? clusters.map((point) => {
        let { id, text } = point;
        let clusterId = null;
        let numPoints = 1;
        let type = GoogleSearchMapConst.LISTING_TYPE;
        if (point.type && point.type === 'Feature') {
          text = point.properties.point_count.toString();
          numPoints = point.properties.point_count;
          clusterId = point.properties.cluster_id;
          id = clusterId;

          // TODO: Mocking type
          type = numPoints < 5 ?
            GoogleSearchMapConst.GROUP_LISTINGS_TYPE : GoogleSearchMapConst.CLUSTER_TYPE;
        }
        return {
          lng: point.geometry.coordinates[0],
          lat: point.geometry.coordinates[1],
          numPoints,
          text,
          type,
          clusterId,
          listingID: id,
          id: `${id}_${numPoints}`,
        };
      }) : [],
    });
  };

  handleMapChange = ({ center, zoom, bounds }) => {
    this.setState({
      mapOptionsBounds: bounds,
      mapOptionsCenter: center,
      mapOptionsZoom: zoom,
    });
    this.createClusters(this.props);
  };

  renderPlaces() {
    // calculator places.
    const places = this.state.clusters
      .map(({
        id, numPoints, type, ...markerProps
      }) => {
        // calculator Show Popup or not.
        const showInfo = (id === this.state.markerClicked);
        let listing = {};
        if (showInfo) {
          listing = this.props.activeListing;
        }

        let point = {};

        switch (type) {
        case GoogleSearchMapConst.LISTING_TYPE:
          point = (<ListingMarker
            id={id}
            showInfo={showInfo}
            listing={listing}
            onListingSelected={this.props.onListingSelected}
            onCloseButtonClick={this.onMarkerCloseButtonClick}
            onClick={this.onMarkerListingClick}
            {...markerProps}
          />);
          break;
        case GoogleSearchMapConst.GROUP_LISTINGS_TYPE:
          point = (<GroupListingsMarker
            id={id}
            {...markerProps}
            showInfo={showInfo}
            listingsOfGroup={this.props.listingsOfGroup}
            onListingSelected={this.props.onListingSelected}
            onCloseButtonClick={this.onMarkerCloseButtonClick}
            onClick={this.onMarkerGroupListingClick}
          />);
          break;
        case GoogleSearchMapConst.CLUSTER_TYPE:
          point = (<ClusterMarker
            id={id}
            {...markerProps}
            onClick={this.onMarkerClusterClick}
          />);
          break;
        default:
          point = null;
        }

        return point;
      });

    return places;
  }

  render() {
    return (
      <div className={`${styles.googleMap}`}>
        <Mobile>
          <button className={`${styles.closeButton}`} onClick={this.onClose}>
            <SvgCloseIcon />
          </button>
        </Mobile>
        <GoogleMap
          defaultZoom={this.props.defaultZoom}
          defaultCenter={this.props.defaultCenter}
          options={this.props.options}
          onChange={this.handleMapChange}
          onChildClick={this.handleChildClick}
          zoom={this.state.mapOptionsZoom}
          center={this.state.mapOptionsCenter}
          bootstrapURLKeys={{ key: GoogleSearchMapConst.API_KEY }}
          shouldUpdateComponent
        >
          {this.renderPlaces()}
        </GoogleMap>
      </div>
    );
  }
}

GoogleMapSearch.propTypes = {
  defaultZoom: PropTypes.number,
  defaultCenter: PropTypes.any,
  options: PropTypes.any,
  listingsOfGroup: PropTypes.any,
  activeListing: PropTypes.object,
  onActiveListing: PropTypes.func,
  onListingSelected: PropTypes.func,
  onMarkerGroupListingClick: PropTypes.func.isRequired,
  onMapViewModeChanged: PropTypes.func.isRequired,
};

GoogleMapSearch.defaultProps = {
  defaultZoom: GoogleSearchMapConst.DEFAULT_ZOOM,
  defaultCenter: {
    lat: GoogleSearchMapConst.DEFAULT_CENTER_LAT,
    lng: GoogleSearchMapConst.DEFAULT_CENTER_LNG,
  },
  options: {
    maxZoom: GoogleSearchMapConst.MAX_ZOOM,
    scrollwheel: false,
    zoomControl: true,
    fullscreenControl: false,
  },
  listingsOfGroup: [],
  activeListing: {},
  onActiveListing: noop,
  onListingSelected: noop,
};
export default GoogleMapSearch;
