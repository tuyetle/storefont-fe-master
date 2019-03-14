import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import Recaptcha from 'react-recaptcha';

const RecaptchaFormField = (props) => {
  const verifyCallback = (response) => {
    props.input.onChange(response);
  };

  return (
    <Recaptcha
      render="explicit"
      {...props}
      verifyCallback={verifyCallback}
      onloadCallback={noop}
    />
  );
};

RecaptchaFormField.propTypes = {
  input: PropTypes.object,
};

RecaptchaFormField.defaultProps = {
  input: null,
};

export default RecaptchaFormField;
