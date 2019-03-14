// import React from 'react';
import PropTypes from 'prop-types';
import markerIcons from './MarkerIcons';
import styles from './styles';

const MarkerWithIcon = ({ name }) => {
  const Icon = markerIcons[name];
  return (
    <div className={styles.markerIcon}>
      <img src={Icon} alt="icon" />
    </div>
  );
};

MarkerWithIcon.propTypes = {
  name: PropTypes.string,
};

MarkerWithIcon.defaultProps = {
  name: 'markerlocation',
};

export default MarkerWithIcon;
