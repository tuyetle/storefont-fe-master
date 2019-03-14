import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import styles from './styles';

const PhoneFormField = (props) => {
  const {
    placeholder, mask, maskChar, alwaysShowMask, onChangeHandler,
    className, errorClass, meta, input,
  } = props;
  const errorClassname = meta.touched && meta.error ? (errorClass || `${styles.error}`) : '';

  return (
    <InputMask
      className={`form-control ${className} ${errorClassname}`}
      onChange={input.onChange || onChangeHandler}
      mask={mask}
      maskChar={maskChar}
      alwaysShowMask={alwaysShowMask}
      placeholder={placeholder}
      {...input}
    />
  );
};

PhoneFormField.propTypes = {
  onChangeHandler: PropTypes.func,
  input: PropTypes.object,
  meta: PropTypes.object,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  placeholder: PropTypes.string,
};

PhoneFormField.defaultProps = {
  onChangeHandler: null,
  input: {},
  meta: {},
  mask: '9999 999 9999',
  className: '',
  errorClass: '',
  maskChar: '',
  placeholder: '',
  alwaysShowMask: false,
};


export default withLabelAndMessage(PhoneFormField);
