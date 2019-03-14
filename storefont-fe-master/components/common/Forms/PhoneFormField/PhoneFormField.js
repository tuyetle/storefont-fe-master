import React from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import withFormField from '../withFormField';

const PhoneFormField = props => (
  <InputMask
    className={`${props.className} ${props.errorClass}`}
    mask={props.mask}
    maskChar={props.maskChar}
    alwaysShowMask={props.alwaysShowMask}
    placeholder={props.placeholder}
    onBlur={props.onBlurHandler}
    onFocus={props.onFocusHandler}
    onChange={props.onChangeHandler}
    value={props.value || ''}
    id={props.id}
  />
);

PhoneFormField.propTypes = {
  id: PropTypes.string,
  mask: PropTypes.string,
  maskChar: PropTypes.string,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  alwaysShowMask: PropTypes.bool,
  placeholder: PropTypes.string,
  onBlurHandler: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

PhoneFormField.defaultProps = {
  id: '',
  mask: '9999 999 9999',
  className: '',
  errorClass: '',
  maskChar: '',
  placeholder: '',
  alwaysShowMask: false,
  value: null,
};

export default withFormField(PhoneFormField);
