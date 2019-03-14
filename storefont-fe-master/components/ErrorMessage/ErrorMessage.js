import React from 'react';
import PropTypes from 'prop-types';

const ErrorMessage = ({ message }) => (
  <span>
    { message }
  </span>
);

ErrorMessage.propTypes = {
  message: PropTypes.string,
};

ErrorMessage.defaultProps = {
  message: '',
};

export default ErrorMessage;
