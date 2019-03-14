import React from 'react';
import PropTypes from 'prop-types';
import propertyDetailAnchorConfig from '~/config/anchorConfig';
import SecondaryAttributes from './SecondaryAttributes';
import UtilitiesAttributes from './UtilitiesAttributes';
import ShortDescriptionAttributes from './ShortDescriptionAttributes';
import styles from './AttributeValuesStyles';

const AttributeValues = props => (
  <div className={styles.attributes}>
    <div id={propertyDetailAnchorConfig.short_description.id} />
    <h4 className={styles.heading}>{props.shortDescriptionAttributeLabel}</h4>
    <ShortDescriptionAttributes
      attributes={props.shortDescriptionAttributes}
    />
    <div id={propertyDetailAnchorConfig.secondary_features.id} />
    <h4 className={styles.heading}>{props.secondaryAttributeLabel}</h4>
    <SecondaryAttributes
      attributes={props.secondaryAttributes}
      t={props.t}
    />
    <div id={propertyDetailAnchorConfig.utilities.id} />
    <h4 className={styles.heading}>{props.utilitiesAttributeLabel}</h4>
    <UtilitiesAttributes
      attributes={props.utilitiesAttributes}
      t={props.t}
    />
  </div>
);

AttributeValues.propTypes = {
  shortDescriptionAttributeLabel: PropTypes.string.isRequired,
  shortDescriptionAttributes: PropTypes.array.isRequired,
  secondaryAttributeLabel: PropTypes.string.isRequired,
  secondaryAttributes: PropTypes.array.isRequired,
  utilitiesAttributeLabel: PropTypes.string.isRequired,
  utilitiesAttributes: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

export default AttributeValues;
