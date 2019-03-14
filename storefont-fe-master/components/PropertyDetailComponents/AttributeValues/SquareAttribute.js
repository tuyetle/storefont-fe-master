import React from 'react';
import PropTypes from 'prop-types';
import styles from './SquareAttributeStyles';

const SquareAttribute = ({ item }) => (
  <span className={styles.attributeValue}>
    {item.value}
    <span> m<sup>2</sup></span>
  </span>
);

SquareAttribute.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SquareAttribute;
