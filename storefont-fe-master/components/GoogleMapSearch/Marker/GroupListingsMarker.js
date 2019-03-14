import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { noop, isFunction } from 'lodash';
import { translate } from 'react-i18next';
import ListingPreview from '~/components/SearchResultComponents/ListingPreview/ListingPreview';
import CloseIcon from '~/static/assets/img/close.svg';
import SvgSmallCircles from '../icons/ic-group-circles.svg';
import styles from './styles';

class GroupListingsMarker extends Component {
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

    renderListings() {
      const listings = this.props.listingsOfGroup.map(item => (
        <ListingPreview
          listing={item}
          allowSave={false}
          showCloseButton={false}
          imgStyle="left"
          onCloseButtonClick={this.onCloseButtonClick}
          onListingSelected={this.props.onListingSelected}
        />
      ));

      return (
        <div className={`${styles.groupListingModal}`}>
          <div
            className={`${styles.closeButton}`}
            onClick={this.onCloseButtonClick}
            onKeyPress={this.onCloseButtonClick}
            role="presentation"
          >
            <CloseIcon />
          </div>
          <div className={`${styles.groupListings}`}>{listings}</div>
        </div>
      );
    }

    renderGroupListings() {
      return (
        <div
          className={`${styles.groupListingsMarker}`}
          onClick={this.onClick}
          tabIndex={-1}
          role="button"
        >
          <span className="p-1"><SvgSmallCircles /></span>
          <div className={`${styles.text}`} >
            {this.props.t('common:moneyFormat', { value: this.props.text })}
          </div>
        </div>
      );
    }

    render() {
      if (this.props.showInfo) {
        return this.renderListings();
      }

      return this.renderGroupListings();
    }
}

GroupListingsMarker.propTypes = {
  text: PropTypes.any,
  showInfo: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  listingsOfGroup: PropTypes.array,
  onClick: PropTypes.func,
  onListingSelected: PropTypes.func,
  t: PropTypes.func.isRequired,
};

GroupListingsMarker.defaultProps = {
  text: '',
  showInfo: false,
  onCloseButtonClick: noop,
  onClick: noop,
  listingsOfGroup: [],
  onListingSelected: noop,
};

export default translate(['common'])(GroupListingsMarker);
