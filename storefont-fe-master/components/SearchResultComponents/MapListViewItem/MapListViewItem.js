import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import ImageListing from '~/components/SearchResultComponents/ImageListing/ImageListing';
import LocationIcon from '~/static/assets/img/ic-location.svg';
import SqftIcon from '~/static/assets/img/ic-sqft.svg';
import BedRoomIcon from '~/static/assets/img/ic-bed.svg';
import BathRoomIcon from '~/static/assets/img/ic-bath.svg';
import HeartIcon from '~/static/assets/img/heart.svg';
import RedHeartIcon from '~/static/assets/img/heart-red.svg';
import styles from './styles';


const MapListViewItem = (props) => {
  const FavoritedIcon = props.listing.saved ? RedHeartIcon : HeartIcon;
  const onSelectListing = (e) => {
    e.preventDefault();
    props.onListingSelected(props.listing);
  };
  const onSaveListing = (e) => {
    props.onListingSaved(this.props.listing);
    e.preventDefault();
    return false;
  };

  return (
    <div className={`${styles.content}`}>
      <div className="col-4 p-0">
        <ImageListing img={props.listing.img} listingType={props.listing.subTitle} className={`${styles.image}`} />
      </div>

      <div className="col-8 pt-3 pb-3">
        <div className="row">
          <div className="col-12">
            <a onClick={onSelectListing} className={styles.title} href="/">
              <h4>{props.listing.title}</h4>
            </a>
          </div>
        </div>

        <div className="row pt-2">
          <div className={`col-12 text-muted ${styles.description}`}>
            <span>{props.listing.description}</span>
          </div>
        </div>

        <div className="row">
          <div className="col-8 pb-1 pt-1 pr-0 text-muted">
            <LocationIcon className={`${styles.widthIcon} ${styles.addressIcon}`} />
            <span className={styles.addressText}>{props.listing.address}</span>
          </div>
          <div className={`col-4 ${styles.middelBox} ${styles.price}`}>
            { props.t('common:moneyFormat', { value: props.listing.price }) }
          </div>
        </div>
        <div className="row">
          <div className={`col-8 col-xl-7 text-muted ${styles.utinityIcons}`}>
            <div className={styles.area}>
              <SqftIcon className={`${styles.widthIcon} ${styles.iconVAlign}`} />
              <span>{props.listing.area} m<sup>2</sup></span>
            </div>
            <div className={styles.bedRoom}>
              <BedRoomIcon className={`${styles.widthIcon} ${styles.iconVAlign}`} />
              <span>{props.listing.bedRoom}</span>
            </div>
            <div className={styles.bath}>
              <BathRoomIcon className={`${styles.widthIcon} ${styles.iconVAlign}`} />
              <span>{props.listing.bathRoom}</span>
            </div>
          </div>
          <div className={`col-4 col-xl-5 pl-0 ${styles.middelBox}`}>
            <a href="/" onClick={onSaveListing} className={styles.saveListing}>
              <FavoritedIcon className={`${styles.hearIcon}`} /> <span className={styles.saveListingText}>{props.t('SaveListing')}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

MapListViewItem.propTypes = {
  listing: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
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
  t: PropTypes.func.isRequired,
  onListingSelected: PropTypes.func.isRequired,
  onListingSaved: PropTypes.func.isRequired,
};

MapListViewItem.defaultProps = {
  listing: {
    title: '',
    subTitle: '',
    description: null,
    showImage: true,
    img: '',
    address: '',
    area: 0,
    bathRoom: 1,
    bedRoom: 1,
    price: 0,
  },
};
export default translate(['postListingPayment'])(MapListViewItem);
