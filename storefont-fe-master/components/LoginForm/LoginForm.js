import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Form, Field } from 'react-form';
import { noop, isNil, isEmpty } from 'lodash';
import EmailOrPhoneFormField from '~/components/common/Forms/EmailOrPhoneFormField/EmailOrPhoneFormField';
import emailOrPhoneValidator from '~/components/common/Forms/EmailOrPhoneFormField/EmailOrPhoneFormFieldValidation';
import PasswordFormField from '~/components/common/Forms/PasswordFormField/PasswordFormField';
import passwordValidator from '~/components/common/Forms/PasswordFormField/PasswordFormFieldValidation';
import CheckboxFormField from '~/components/common/Forms/CheckboxFormField/CheckboxFormField';
import icGoogle from './img/ic-google.png';
import icZalo from './img/ic-zalo.png';
import icFacebook from './img/ic-facebook.png';
import styles from './styles';

export class LoginFormInner extends Component {
  validate = (values) => {
    const emailOrPhoneErrors = emailOrPhoneValidator(values.username, 'username');
    const passwordErrors = passwordValidator(values.password, 'password');
    return {
      username: emailOrPhoneErrors,
      password: passwordErrors,
    };
  }
  submit = (values) => {
    // Dispatch login action
    this.props.dispatchLogin({
      ...values,
    });
  }
  gotoForgotPassword = (e) => {
    e.preventDefault();
    this.props.dispatchCloseModal();
    this.props.gotoForgotPassword();
  }
  showRegisterHandler = (e) => {
    e.preventDefault();
    this.props.dispatchShowModal({ currentModal: 'register' });
  };
  render() {
    const { t, errors } = this.props;
    return (
      <Fragment>
        <div className="text-center">
          <h1>{t('login')}</h1>
          <p className="p-0 m-0">{t('welcome')}</p>
          <p>{t('loginBy')}</p>
        </div>
        <div className={`${styles.thirdPartyLogo} d-flex justify-content-center`}>
          <img src={icFacebook} alt="logo" />
          <img src={icGoogle} alt="logo" />
          <img src={icZalo} alt="logo" />
        </div>
        <p className="text-center">{t('or')}</p>
        <div className={`${styles.wrapperRegister} d-flex justify-content-center`}>
          {t('youDontHaveAccount')}<button className="btn btn-link" onClick={this.showRegisterHandler} >{t('register')}</button>
        </div>
        <Form onSubmit={this.submit} validate={this.validate}>
          {formApi => (
            <form className={`${styles.form}`} onSubmit={formApi.submitForm}>
              <div className="form-group">
                <Field
                  field="username"
                  component={EmailOrPhoneFormField}
                  className={`${styles.input} form-control`}
                  isRequired
                />
              </div>
              <div className="form-group">
                <Field
                  field="password"
                  component={PasswordFormField}
                  className={`${styles.input} form-control`}
                  isRequired
                />
              </div>
              <div className="form-group pb-4">
                <div className="form-check float-left">
                  <Field
                    component={CheckboxFormField}
                    field="rememberMe"
                  />
                  <label className={`${styles.label} form-check-label`}>
                    {t('rememberMe')}
                  </label>
                </div>
                <div className="float-right clearfix">
                  <a onClick={this.gotoForgotPassword} href="/" >{t('forgotPasswordQuestion')}</a>
                </div>
              </div>
              {
                !isNil(errors) && !isEmpty(errors) &&
                <div className={`form-group pb-2 ${styles.errorMsg}`}>{t('errorLoginMsg')}</div>
              }
              <input
                className={`${styles.submitButton} btn btn-lg btn-block rounded-0`}
                type="submit"
                value={t('login')}
                disabled={isEmpty(formApi.touched)
                  || formApi.submitting
                  || !isNil(formApi.getFormState().errors)}
              />
            </form>
          )}
        </Form>
      </Fragment>
    );
  }
}

LoginFormInner.propTypes = {
  dispatchLogin: PropTypes.func,
  dispatchCloseModal: PropTypes.func,
  dispatchShowModal: PropTypes.func,
  gotoForgotPassword: PropTypes.func.isRequired,
  errors: PropTypes.any,
  t: PropTypes.func,
};

LoginFormInner.defaultProps = {
  dispatchLogin: noop,
  dispatchCloseModal: noop,
  dispatchShowModal: noop,
  errors: null,
  t() {},
};

const LoginForm = translate(['auth'])(LoginFormInner);
export default LoginForm;
