import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import {
  REQUIRED,
  WRONG_FORMAT,
} from '~/services/validations/validationTypes';
import TextFormField from '~/components/common/Forms/TextFormField/TextFormField';
import validateError from './EmailOrPhoneFormFieldValidation';

import styles from './styles';

const EmailOrPhoneFormField = (props) => {
  const {
    error,
    setError,
  } = props.fieldApi;

  const {
    className,
    errorClass,
    t,
  } = props;
  let errorMsg = '';
  if (error) {
    switch (error) {
    case REQUIRED:
      errorMsg = t('common:emailOrPhoneRequired');
      break;
    case WRONG_FORMAT:
      errorMsg = t('common:wrongFormat');
      break;
    default:
      errorMsg = error;
    }
  }
  const onBlurHandler = (e) => {
    const validation = validateError(e.target.value);
    if (validation) {
      setError(validation);
    }
  };

  const errorClassname = error ? (errorClass || `${styles.error}`) : null;

  return (
    <TextFormField {...props} className={isNil(errorClassname) ? className : `${errorClassname} ${props.className}`} errorMessage={errorMsg} onBlur={onBlurHandler} placeholder={t('auth:emailOrPhone')} />
  );
};
EmailOrPhoneFormField.propTypes = {
  className: PropTypes.string,
  errorClass: PropTypes.string,
  fieldApi: PropTypes.object,
  isRequired: PropTypes.bool,
  t: PropTypes.func,
};
EmailOrPhoneFormField.defaultProps = {
  isRequired: false,
  className: null,
  errorClass: null,
  fieldApi: null,
  t: null,
};

export default translate(['common', 'auth'])(EmailOrPhoneFormField);
