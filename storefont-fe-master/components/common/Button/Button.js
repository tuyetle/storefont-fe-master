import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  onClickHandler, label, className, disabled, type,
}) => (
  <button
    className={className}
    onClick={onClickHandler}
    disabled={disabled}
    type={type}
  >
    {label}
  </button>);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.any,
  onClickHandler: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
};

Button.defaultProps = {
  onClickHandler: null,
  className: '',
  type: '',
  disabled: false,
};

export default Button;
