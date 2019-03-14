import React from 'react';
import PropTypes from 'prop-types';
import ListingTypeOpt from '~/const/ListingTypeOpt';
import styles from './styles';

const ImageListing = (props) => {
  const listingType = (type) => {
    switch (type) {
    case ListingTypeOpt.top:
      return styles.top;
    case ListingTypeOpt.express:
      return styles.express;
    default:
      return '';
    }
  };
  return (
    <div className={`${styles.wapper} ${props.className} align-items-center`}>
      <div className={listingType(props.listingType)} />
      <img src={props.img} className={styles.maxWidth} alt="property preview" />
    </div>
  );
};
ImageListing.propTypes = {
  className: PropTypes.string,
  listingType: PropTypes.string,
  img: PropTypes.string,
};

ImageListing.defaultProps = {
  className: '',
  listingType: null,
  img: '',
};
export default ImageListing;
