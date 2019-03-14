import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { noop, isEmpty, isNil } from 'lodash';
import { Field } from 'react-form';
import Link from 'next/link';
import { translate } from 'react-i18next';
import EmailOrPhoneFormField from '~/components/common/Forms/EmailOrPhoneFormField/EmailOrPhoneFormField';
import RecaptchaFormField from '~/components/common/Forms/RecaptchaFormField/RecaptchaFormField';
import CheckboxFormField from '~/components/common/Forms/CheckboxFormField/CheckboxFormField';
import { RULES_AND_CONDITION } from '~/config/routerConfig';
import { RECAPTCHA_KEY } from '~/config/config';
import styles from './styles';

export class RegistrationContent extends PureComponent {
  validateCaptcha = value => (isEmpty(value) ? ({ error: 'captcha' }) : '');

  renderRegistrationForm = () => {
    const { t, registrationRequestResult, formApi } = this.props;

    if (!isNil(registrationRequestResult)) return null;

    return [
      <div key="registrationEmailOrPhone" className="form-group">
        <strong className={styles.label}>{t('emailOrPhone')}</strong>
        <Field
          field="emailOrPhone"
          component={EmailOrPhoneFormField}
          className={`${styles.input} form-control`}
        />
      </div>,
      <div key="registrationCaptcha" className={`${styles.captcha}`} >
        <Field
          field="captcha"
          component={RecaptchaFormField}
          sitekey={RECAPTCHA_KEY}
          hl="vi"
          isRequired
          validate={this.validateCaptcha}
        />
      </div>,
      <div key="registrationReceiveNews">
        <label className={`${styles.checkbox}`} >
          <Field
            component={CheckboxFormField}
            field="receiveNews"
          />
          <span >{t('receiveNews')}</span>
        </label>
      </div>,
      <input
        key="registrationSubmitAction"
        className={isEmpty(formApi.values) ? `${styles.disableSubmitButton}` : `${styles.submitButton}  btn rounded-0`}
        type="submit"
        disabled={isEmpty(formApi.values)}
        value={t('register')}
      />,
      <div key="registrationRulesAndConditions" className={`${styles.rulesAndCondition}`}>
        {t('rulesAndConditionBefore')}<Link href={RULES_AND_CONDITION} ><a className={`${styles.linkRules}`} href="/">{t('rulesAndCondition')}</a></Link>{t('rulesAndConditionAfter')}
      </div>,
    ];
  }

  render = () => {
    const { t, registrationRequestResult, formApi } = this.props;

    return (
      <form className={`${styles.form}`} onSubmit={formApi.submitForm}>
        <div className={`${styles.title}`} > {t('register')} </div>
        <div className={`${styles.description}`} > {t('registerDescription')}</div>
        <div className={`${styles.successMsg}`}>
          {registrationRequestResult === true && <span>{t('successRegistrationMsg')}</span>}
        </div>
        <div className={`${styles.errorMsg}`}>
          {registrationRequestResult === false && <span>{t('errorRegistrationMsg')}</span>}
        </div>
        {this.renderRegistrationForm()}
      </form>
    );
  }
}

RegistrationContent.propTypes = {
  formApi: PropTypes.shape({
    submitForm: PropTypes.func,
  }).isRequired,
  t: PropTypes.func,
  registrationRequestResult: PropTypes.bool,
};

RegistrationContent.defaultProps = {
  t: noop,
  registrationRequestResult: null,
};

export default translate(['auth'])(RegistrationContent);
