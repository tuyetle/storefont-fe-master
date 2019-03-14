import React from 'react';
import PropTypes from 'prop-types';
import withFormField from '../withFormField';

const TextFormField = props => (
  <input
    className={`${props.className} ${props.errorClass}`}
    type={props.type}
    placeholder={props.placeholder}
    onBlur={props.onBlurHandler}
    onFocus={props.onFocusHandler}
    onChange={props.onChangeHandler}
    value={props.value || ''}
    id={props.id}
  />
);

TextFormField.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  placeholder: PropTypes.string,
  onBlurHandler: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextFormField.defaultProps = {
  id: '',
  placeholder: '',
  className: '',
  errorClass: '',
  type: 'text',
  value: null,
};

export default withFormField(TextFormField);
