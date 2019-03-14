import React from 'react';
import PropTypes from 'prop-types';
import LocationIcon from '~/static/assets/img/ic-location.svg';
import styles from './styles';

const AddressPropertyDetail = ({ transactionType, address }) => (
  <div className={styles.addressTransaction}>
    <LocationIcon className={styles.iconLocation} />
    <span className={styles.label}>{address}</span>
    <span className={styles.transactionLabel}>{transactionType}</span>
  </div>
);

AddressPropertyDetail.propTypes = {
  address: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired,
};

export default AddressPropertyDetail;
