import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
// import styles from './BaseLabel.css';
import { css } from 'glamor';
import styles from './styles';

const BaseLabel = ({ htmlFor, label, isRequired }) => (
  <label htmlFor={htmlFor} className={css(styles.label, isRequired ? styles.required : null)}>
    { label }
  </label>
);

BaseLabel.propTypes = {
  htmlFor: PropTypes.string,
  isRequired: PropTypes.bool,
  label: PropTypes.string,
};

BaseLabel.defaultProps = {
  htmlFor: null,
  label: null,
  isRequired: false,
};
export default BaseLabel;
