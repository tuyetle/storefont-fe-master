import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { noop, isEmpty } from 'lodash';
import { Field } from 'react-form';
import { translate } from 'react-i18next';
import EmailOrPhoneFormField from '~/components/common/Forms/EmailOrPhoneFormField/EmailOrPhoneFormField';
import styles from './styles';

const ForgotPasswordContent = (props) => {
  const { t, formApi } = props;
  return (
    <Fragment>
      <div className={`${styles.title}`} > {t('forgotPassword')} </div>
      <form onSubmit={formApi.submitForm}>
        <div className={`${styles.description}`} > {t('forgotPasswordDescription')} </div>
        <div className="form-group">
          <strong className={styles.label}>{t('emailOrPhone')}</strong>
          <Field
            field="emailOrPhone"
            component={EmailOrPhoneFormField}
            className={`${styles.input} form-control`}
          />
        </div>
        <input
          className={isEmpty(formApi.values) ? `${styles.disableSubmitButton}` : `${styles.submitButton}`}
          type="submit"
          disabled={isEmpty(formApi.values)}
          value={t('sendNewPassword')}
        />
      </form>
    </Fragment>
  );
};
ForgotPasswordContent.propTypes = {
  formApi: PropTypes.shape({
    submitForm: PropTypes.func,
  }).isRequired,
  t: PropTypes.func,
};

ForgotPasswordContent.defaultProps = {
  t: noop,
};
export default translate(['auth'])(ForgotPasswordContent);
