import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './styles';

const PriceLabelPropertyDetail = ({ t, transactionType, priceText }) => (
  <div className="priceLabel">
    <div className={styles.title}>{transactionType}</div>
    <div className={styles.price}>
      {t('common:moneyFormat', { value: priceText })}
    </div>
  </div>
);

PriceLabelPropertyDetail.propTypes = {
  transactionType: PropTypes.string,
  priceText: PropTypes.number,
  t: PropTypes.func.isRequired,
};

PriceLabelPropertyDetail.defaultProps = {
  transactionType: null,
  priceText: 0,
};

export default translate(['common'])(PriceLabelPropertyDetail);
