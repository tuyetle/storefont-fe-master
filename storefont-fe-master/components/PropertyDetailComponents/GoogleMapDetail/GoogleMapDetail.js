import React, { Component, Fragment } from 'react';
import { Mobile, NotMobile } from '~/config/media';
import PropTypes from 'prop-types';
import GoogleMap from 'google-map-react';

import GoogleSearchMapConst from '~/const/GoogleSearchMapConst';
import MarkerWithIcon from './Markers/MarkersWithIcon';
import InterestBox from './InterestBox/InterestBox';
import GoogleCircleStyle from './GoogleCircleStyle';

import styles from './styles';

class GoogleMapDetail extends Component {
  constructor(props) {
    super(props);
    this._renderCicle = this._renderCicle.bind(this);
    this._renderMarkers = this._renderMarkers.bind(this);
  }
    _renderCicle = ({ map, maps }) => {
      let defaultConfig = {
        map,
        center: this.props.location,
        radius: GoogleSearchMapConst.DEFAULT_CIRCLE_RADIUS,
      };
      defaultConfig = { ...defaultConfig, ...GoogleCircleStyle };

      const circle = new maps.Circle(defaultConfig);
      return circle;
    };

    _renderMarkers() {
      let count = 0;
      const POIs = this.props.pointsOfInterest.map((item) => {
        count += 1;
        return (
          <MarkerWithIcon
            key={`${item.key}_${count}`}
            name={`marker${item.type}`}
            lat={item.lat}
            lng={item.lng}
          />);
      });

      return POIs;
    }

    renderOther() {
      return (
        <NotMobile>
          <div className={styles.googleMapDetail} >
            <GoogleMap
              zoom={this.props.defaultZoom}
              center={this.props.location}
              onGoogleApiLoaded={this._renderCicle}
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{ key: GoogleSearchMapConst.API_KEY }}
            >
              <MarkerWithIcon
                name="markerlocation"
                lat={this.props.location.lat}
                lng={this.props.location.lng}
              />
              {this._renderMarkers()}
            </GoogleMap>
            <InterestBox
              pointsOfInterest={this.props.pointsOfInterest}
              t={this.props.t}
            />
          </div>
        </NotMobile>
      );
    }

    renderMobile() {
      return (
        <Mobile>
          <div className={styles.googleMapDetail} >
            <GoogleMap
              zoom={this.props.defaultZoom}
              center={this.props.location}
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{ key: GoogleSearchMapConst.API_KEY }}
            >
              <MarkerWithIcon
                name="markerlocation"
                lat={this.props.location.lat}
                lng={this.props.location.lng}
              />
            </GoogleMap>
          </div>
        </Mobile>
      );
    }


    render() {
      return (
        <Fragment>
          {
            this.renderOther()
          }
          {
            this.renderMobile()
          }
        </Fragment>
      );
    }
}

GoogleMapDetail.propTypes = {
  t: PropTypes.func.isRequired,
  defaultZoom: PropTypes.number,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }).isRequired,
  pointsOfInterest: PropTypes.array,
};

GoogleMapDetail.defaultProps = {
  defaultZoom: GoogleSearchMapConst.DEFAULT_DETAIL_ZOOM,
  pointsOfInterest: [],
};

export default GoogleMapDetail;
