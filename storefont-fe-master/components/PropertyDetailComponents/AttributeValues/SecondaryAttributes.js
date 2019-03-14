import React from 'react';
import PropTypes from 'prop-types';
import styles from './SecondaryAttributesStyles';

const SecondaryAttributes = props => (
  <ul className={styles.attributes}>
    {props.attributes.map(attr => (
      <li key={`attr_${attr.name}`} className={styles.attribute}>
        {attr.displayName}: {props.t(attr.value)}
      </li>
    ))}
  </ul>
);

SecondaryAttributes.propTypes = {
  attributes: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

export default SecondaryAttributes;
