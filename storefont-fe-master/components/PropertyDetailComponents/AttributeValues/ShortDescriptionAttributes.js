import React from 'react';
import PropTypes from 'prop-types';
import styles from './ShortDescriptionAttributesStyles';

const ShortDescriptionAttributes = props => (
  <ul className={styles.shortDescription}>
    {props.attributes.map(attr => (
      <li key={`attr_${attr.name}`} className={styles.shortDescriptionItem}>
        {attr.displayName}
      </li>
    ))}
  </ul>
);

ShortDescriptionAttributes.propTypes = {
  attributes: PropTypes.array.isRequired,
};

export default ShortDescriptionAttributes;
