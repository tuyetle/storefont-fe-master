import React, { Fragment } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import Recaptcha from 'react-recaptcha';

import styles from './styles';

const RecaptchaFormField = (props) => {
  const { setValue, error } = props.fieldApi;

  const { t } = props;

  const verifyCallback = (response) => {
    setValue(response);
  };

  return (
    <Fragment>
      <Recaptcha
        render="explicit"
        {...props}
        verifyCallback={verifyCallback}
        onloadCallback={noop}
      />
      <span className={styles.error}> { error && t('common:captchaRequired') } </span>
    </Fragment>
  );
};

RecaptchaFormField.propTypes = {
  input: PropTypes.object,
  fieldApi: PropTypes.object,
  t: PropTypes.func,
};

RecaptchaFormField.defaultProps = {
  input: null,
  fieldApi: null,
  t: null,
};

export default translate(['common'])(RecaptchaFormField);
