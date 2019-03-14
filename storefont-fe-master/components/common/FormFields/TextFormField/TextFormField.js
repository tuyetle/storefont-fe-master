import React from 'react';
import PropTypes from 'prop-types';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import styles from './styles';

const TextFormField = (props) => {
  const {
    id, placeholder, meta, input, type, className, errorClass,
  } = props;
  const errorClassname = meta.touched && meta.error ? (errorClass || `${styles.error}`) : '';

  return (
    <input
      className={`form-control ${errorClassname} ${className}`}
      id={id}
      type={type}
      {...input}
      placeholder={placeholder}
    />
  );
};

TextFormField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  placeholder: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
};

TextFormField.defaultProps = {
  placeholder: '',
  className: '',
  errorClass: '',
  type: 'text',
  meta: {},
  input: {},
};

export default withLabelAndMessage(TextFormField);
