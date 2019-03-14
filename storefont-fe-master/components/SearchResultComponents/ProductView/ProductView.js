import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { noop } from 'lodash';
import TextTruncate from 'react-text-truncate';
import { translate } from 'react-i18next';
import LocationIcon from '~/static/assets/img/ic-location.svg';
import SqftIcon from '~/static/assets/img/ic-sqft.svg';
import BedRoomIcon from '~/static/assets/img/ic-bed.svg';
import BathRoomIcon from '~/static/assets/img/ic-bath.svg';
import HeartIcon from '~/static/assets/img/heart.svg';
import RedHeartIcon from '~/static/assets/img/heart-red.svg';
import CloseIcon from '~/static/assets/img/close.svg';

import styles from './styles';

export class ProductView extends PureComponent {
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
    const { t, listing, showMap } = this.props;
    const detailClassName = `${styles.detailClassName}`;
    const contentViewClassName = `${styles.content}`;
    const FavoritedIcon = listing.saved ? RedHeartIcon : HeartIcon;
    let imageClass = `${styles.image}`;
    if (showMap) {
      imageClass = classnames(imageClass, `${styles.imageGridMap}`);
    }

    return (
      <div className={`${styles.container}`}>
        <div className={`${contentViewClassName}`}>
          <div className="">
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
                    <img src={listing.img} alt="property preview" className={`${imageClass}`} />
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
              <LocationIcon className={`${styles.widthIcon} ${styles.addressIcon}`} />
              <div className={`${styles.addressText}`}>
                <TextTruncate
                  line={2}
                  truncateText="…"
                  text={listing.address}
                />
              </div>
            </div>
            <div className={`${styles.info}`}>
              <div className={`${styles.squareFeet} ${styles.inline}`}>
                <SqftIcon className={`${styles.widthIcon} ${styles.iconVAlign}`} />
                <span>{listing.area} m<sup>2</sup></span>
              </div>
              <div className={`${styles.bedRoom} ${styles.inline}`}>
                <BedRoomIcon className={`${styles.widthIcon} ${styles.iconVAlign}`} />
                <span>{listing.bedRoom}</span>
              </div>
              <div className={`${styles.bathRoom} ${styles.inline}`}>
                <BathRoomIcon className={`${styles.widthIcon} ${styles.iconVAlign}`} />
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

ProductView.propTypes = {
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
  showMap: PropTypes.bool,
};

ProductView.defaultProps = {
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
  showMap: false,
  allowSave: true,
  showCloseButton: false,

  onCloseButtonClick: noop,
  onListingSelected: noop,
};

export default translate(['postListingPayment'])(ProductView);
