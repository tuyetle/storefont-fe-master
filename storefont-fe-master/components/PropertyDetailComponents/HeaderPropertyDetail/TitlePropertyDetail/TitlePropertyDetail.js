import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

const TitlePropertyDetail = ({ title }) => (
  <div className={styles.rightBoder}>
    <h3 className={styles.title}>{title}</h3>
  </div>
);
TitlePropertyDetail.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitlePropertyDetail;
