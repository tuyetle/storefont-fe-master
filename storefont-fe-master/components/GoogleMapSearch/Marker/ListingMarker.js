import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, isFunction } from 'lodash';
import { translate } from 'react-i18next';
import ListingPreview from '~/components/SearchResultComponents/ListingPreview/ListingPreview';
import SvgBigCircle from '../icons/ic-big-circle.svg';
import styles from './styles';

class ListingMarker extends Component {
  constructor(props) {
    super(props);
    this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
    this.onClick = this.onClick.bind(this);
  }

    onCloseButtonClick = () => {
      if (this.props.onCloseButtonClick) {
        this.props.onCloseButtonClick();
      }
    }

    onClick() {
      if (isFunction(this.props.onClick)) {
        this.props.onClick({ ...this.props });
      }
    }

    render() {
      if (this.props.showInfo) {
        return (
          <ListingPreview
            listing={this.props.listing}
            allowSave={false}
            showCloseButton
            imgStyle="left"
            onCloseButtonClick={this.onCloseButtonClick}
            onListingSelected={this.props.onListingSelected}
          />
        );
      }

      return (
        <div
          className={`${styles.listingMarker}`}
          onClick={this.onClick}
          role="button"
          tabIndex={-1}
        >
          <span className="p-1"><SvgBigCircle /></span>
          <div className={`${styles.text}`} >
            {this.props.t('common:moneyFormat', { value: this.props.text })}
          </div>
        </div>
      );
    }
}

ListingMarker.propTypes = {
  text: PropTypes.any,
  showInfo: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  listing: PropTypes.object,
  onClick: PropTypes.func,
  onListingSelected: PropTypes.func,
  t: PropTypes.func.isRequired,
};

ListingMarker.defaultProps = {
  text: '',
  showInfo: false,
  onCloseButtonClick: noop,
  onClick: noop,
  listings: {},
  onListingSelected: noop,
};

export default translate(['common'])(ListingMarker);
