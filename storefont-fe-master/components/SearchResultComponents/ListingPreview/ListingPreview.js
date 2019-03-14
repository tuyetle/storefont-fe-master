import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { translate } from 'react-i18next';
import LocationIcon from '~/static/assets/img/location.svg';
import SqftIcon from '~/static/assets/img/sqft.svg';
import BedRoomIcon from '~/static/assets/img/bed.svg';
import BathRoomIcon from '~/static/assets/img/bath.svg';
import HeartIcon from '~/static/assets/img/heart.svg';
import RedHeartIcon from '~/static/assets/img/heart-red.svg';
import CloseIcon from '~/static/assets/img/close.svg';

import styles from './styles';

export class ListingPreview extends PureComponent {
  constructor(props) {
    super(props);
    this.onSelectListing = this.onSelectListing.bind(this);
    this.onSaveListing = this.onSaveListing.bind(this);
    this.onCloseButtonClick = this.onCloseButtonClick.bind(this);
  }
  onSelectListing() {
    this.props.onListingSelected(this.props.listing);
  }

  onSaveListing(e) {
    this.props.onListingSaved(this.props.listing);
    e.preventDefault();
    return false;
  }

  onCloseButtonClick = () => {
    this.props.onCloseButtonClick();
  }

  render() {
    const { t, listing, className } = this.props;
    let imgClassName = '';
    let detailClassName = `${styles.detailClassName}`;
    let contentViewClassName = `${styles.content}`;
    let closeButtonClassName = '';
    const FavoritedIcon = listing.saved ? RedHeartIcon : HeartIcon;

    if (this.props.imgStyle === 'left') {
      imgClassName = `col-5 p-0 ${styles.padding1}`;
      detailClassName = `col-6 pr-0 pl-1 ${styles.padding1}`;
      contentViewClassName = `row p-0 ${contentViewClassName} ${styles.twoColumns}`;
      closeButtonClassName = `col-1 p-1 ${styles.closeButton}`;
    }

    return (
      <div className={`${styles.container} ${className}`}>
        <div className={`m-0 ${contentViewClassName}`}>
          <div className={`${imgClassName}`}>
            <a onClick={this.onSelectListing} href="#">
              {
                ((listing.subTitle !== '') || listing.showImage) &&
                <div className={`${styles.header}`}>
                  {
                    (listing.subTitle !== '') &&
                    <div className={`${styles.subTitle} ${listing.subTitle}`}>
                      <span>{listing.subTitle}</span>
                    </div>
                  }
                  {
                    listing.showImage &&
                    <img src={listing.img} alt="property preview" className={`${styles.image}`} />
                  }
                </div>
              }
            </a>
          </div>
          <div className={`${detailClassName}`}>
            <div className={`${styles.title}`}>
              <a onClick={this.onSelectListing} href="#">
                <h5>{listing.title}</h5>
              </a>
            </div>
            <div className={`${styles.address}`}>
              <LocationIcon />
              <span>{listing.address}</span>
            </div>
            <div className={`${styles.info}`}>
              <div className={`${styles.squareFeet} ${styles.inline}`}>
                <SqftIcon />
                <span>{listing.area} m<sup>2</sup></span>
              </div>
              <div className={`${styles.bedRoom} ${styles.inline}`}>
                <BedRoomIcon />
                <span>{listing.bedRoom}</span>
              </div>
              <div className={`${styles.bathRoom} ${styles.inline}`}>
                <BathRoomIcon />
                <span>{listing.bathRoom}</span>
              </div>
              <div className={`${styles.price}`}>
                {t('common:moneyFormat', { value: listing.price })}
              </div>
            </div>
          </div>
          {
            (this.props.showCloseButton) &&
            <div
              className={closeButtonClassName}
              onClick={this.onCloseButtonClick}
              onKeyPress={this.onCloseButtonClick}
              role="presentation"
            >
              <CloseIcon />
            </div>
          }
          {
            (this.props.allowSave) &&
            <div className={`${styles.save} text-center`}>
              <div className={`${styles.saveWrap}`}>
                <FavoritedIcon className={`${styles.hearIcon}`} />
                <a onClick={this.onSaveListing} href="#">
                  {t('SaveListing')}
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    );
  }
}

ListingPreview.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string,
    subTitle: PropTypes.string,
    showImage: PropTypes.bool,
    img: PropTypes.string,
    address: PropTypes.string,
    area: PropTypes.number,
    bathRoom: PropTypes.number,
    bedRoom: PropTypes.number,
    price: PropTypes.number,
    saved: PropTypes.bool,
  }),
  onListingSelected: PropTypes.func,
  onListingSaved: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  allowSave: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  onCloseButtonClick: PropTypes.func,
  imgStyle: PropTypes.string,
};

ListingPreview.defaultProps = {
  listing: {
    title: '',
    subTitle: '',
    showImage: true,
    img: '',
    address: '',
    area: 0,
    bathRoom: 1,
    bedRoom: 1,
    price: 0,
  },
  onCloseButtonClick: noop,
  allowSave: true,
  showCloseButton: false,
  imgStyle: '',
  onListingSelected: noop,
};

export default translate(['postListingPayment'])(ListingPreview);
