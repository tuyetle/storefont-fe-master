import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import { REQUIRED, PASSWORD_MIN_LENGTH } from '~/services/validations/validationTypes';
import TextFormField from '~/components/common/Forms/TextFormField/TextFormField';
import validateError from './PasswordFormFieldValidation';
import styles from './styles';

const PasswordFormField = (props) => {
  const {
    setError,
    error,
  } = props.fieldApi;

  const {
    className,
    errorClass,
    t,
  } = props;

  const onBlurHandler = (e) => {
    const validation = validateError(e.target.value);
    if (validation) {
      setError(validation);
    }
  };

  const errorClassname = error ? (errorClass || `${styles.error}`) : null;
  let errorMessage = '';
  if (error) {
    switch (error) {
    case REQUIRED:
      errorMessage = t('common:passwordRequired');
      break;
    case PASSWORD_MIN_LENGTH:
      errorMessage = t('common:passwordMinLength');
      break;
    default:
      errorMessage = error;
    }
  }
  return (
    <TextFormField {...props} type="password" className={isNil(errorClassname) ? className : `${errorClassname} ${props.className}`} errorMessage={errorMessage} onBlur={onBlurHandler} placeholder={t('auth:password')} />
  );
};
PasswordFormField.propTypes = {
  className: PropTypes.string,
  errorClass: PropTypes.string,
  fieldApi: PropTypes.object,
  t: PropTypes.func,
};
PasswordFormField.defaultProps = {
  className: null,
  errorClass: null,
  fieldApi: null,
  t: null,
};

export default translate(['common', 'auth'])(PasswordFormField);
