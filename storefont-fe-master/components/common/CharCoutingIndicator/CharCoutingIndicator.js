import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const CharCoutingIndicator = props => (
  <span className={`text-muted ${styles.indicator}`}>
    {props.current}/{props.maxLength}
  </span>
);

CharCoutingIndicator.propTypes = {
  current: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired,
};

export default CharCoutingIndicator;
