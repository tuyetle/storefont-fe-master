import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty, isNil } from 'lodash';
import { Form, Field } from 'react-form';
import { translate } from 'react-i18next';
import { SUCCESS_CODE } from '~/const/ResponseCode';
import SendIcon from '~/static/assets/img/ic-send.svg';
import validateEmail from '~/services/validations/validateEmail';
import validatePhone from '~/services/validations/validatePhone';
import TextFormField from '~/components/common/Forms/TextFormField/TextFormField';
import PhoneFormField from '~/components/common/Forms/PhoneFormField/PhoneFormField';
import TextareaFormField from '~/components/common/Forms/TextareaFormField/TextareaFormField';
import styles from './styles';

class FloatingForm extends PureComponent {
  componentWillReceiveProps = (nextProps) => {
    const { requestContact } = nextProps;
    if (!isEmpty(requestContact) && this.formApi) {
      this.formApi.setAllValues(requestContact);
    }
  }

  onSubmitForm = (submittedValues) => {
    this.props.postContact(submittedValues);
  };

  onValueChanged = (fieldName, e) => {
    const { t } = this.props;
    if (fieldName === 'fullName') {
      const fullNameErrors = isEmpty(e.target.value) ? t('common:fullNameRequired') : null;
      this.formApi.setError(fieldName, fullNameErrors);
    }

    if (fieldName === 'email') {
      let emailErrors = null;
      if (isEmpty(e.target.value)) {
        emailErrors = t('common:emailRequired');
      } else if (!validateEmail(e.target.value)) {
        emailErrors = t('common:emailInvalid');
      }

      this.formApi.setError(fieldName, emailErrors);
    }

    if (fieldName === 'phoneNumber') {
      let phoneErrors = null;
      if (isEmpty(e.target.value)) {
        phoneErrors = t('common:phoneNumberRequired');
      } else if (!validatePhone(e.target.value)) {
        phoneErrors = t('common:phoneInvalid');
      }

      this.formApi.setError(fieldName, phoneErrors);
    }

    if (fieldName === 'description') {
      const descriptionErrors = isEmpty(e.target.value) ? t('common:descriptionRequired') : null;
      this.formApi.setError(fieldName, descriptionErrors);
    }

    if (this.props.onRequestContactChanged) {
      this.props.onRequestContactChanged(fieldName, e.target.value);
    }
  };

  validate = (values) => {
    const { t } = this.props;
    const fullNameErrors = isEmpty(values.fullName) ? t('common:fullNameRequired') : null;

    let emailErrors = null;
    if (isEmpty(values.email)) {
      emailErrors = t('common:emailRequired');
    } else if (!validateEmail(values.email)) {
      emailErrors = t('common:emailInvalid');
    }

    let phoneErrors = null;
    if (isEmpty(values.phoneNumber)) {
      phoneErrors = t('common:phoneNumberRequired');
    } else if (!validatePhone(values.phoneNumber)) {
      phoneErrors = t('common:phoneInvalid');
    }

    let descriptionErrors = null;
    if (isEmpty(values.description)) {
      descriptionErrors = t('common:descriptionRequired');
    }

    return {
      fullName: fullNameErrors,
      email: emailErrors,
      phoneNumber: phoneErrors,
      description: descriptionErrors,
    };
  };

  shouldRenderForm = () => {
    const { postContactResult } = this.props;
    return !postContactResult || postContactResult.statusCode !== SUCCESS_CODE;
  }

  shouldDisableSubmitButton = () => {
    const { requestContact } = this.props;
    if (isEmpty(requestContact)) return true;

    return isNil(requestContact.fullName) && isNil(requestContact.email)
      && isNil(requestContact.phoneNumber) && isNil(requestContact.description);
  }

  renderButton = () => {
    const { t, postContactResult } = this.props;
    if (postContactResult && postContactResult.statusCode === SUCCESS_CODE) {
      return (
        <div className={styles.wrapperSubmitBtn}>
          <button
            type="button"
            className={`${styles.submitButton} ${styles.disableSubmitButton} ${styles.sent}`}
            disabled
          >
            <SendIcon className={styles.iconSend} />
            {t('propertyDetail:thankyou') }
          </button>
        </div>
      );
    }

    const shouldDisable = this.shouldDisableSubmitButton();
    return (
      <div className={styles.wrapperSubmitBtn}>
        <button
          type="submit"
          className={shouldDisable ? `${styles.disableSubmitButton}` : `${styles.submitButton}`}
          disabled={shouldDisable}
        >
          <SendIcon className={styles.iconSend} />
          {t('propertyDetail:sendRequest') }
        </button>
      </div>
    );
  }

  render = () => {
    const { t, requestContact } = this.props;

    return (
      <div className={styles.wrapperForm}>
        <Form onSubmit={this.onSubmitForm} validate={this.validate} validateOnSubmit>
          { (formApi) => {
            this.formApi = formApi;

            return (
              <form onSubmit={formApi.submitForm}>
                {this.shouldRenderForm() &&
                  <Fragment>
                    <div className="form-group">
                      <Field
                        field="fullName"
                        component={TextFormField}
                        className="form-control"
                        placeholder={t('propertyDetail:fullName')}
                        onChangeHandler={this.onValueChanged}
                        value={requestContact && requestContact.fullName}
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        field="phoneNumber"
                        component={PhoneFormField}
                        className="form-control"
                        placeholder={t('propertyDetail:phoneNumber')}
                        onChangeHandler={this.onValueChanged}
                        value={requestContact && requestContact.phoneNumber}
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        field="email"
                        component={TextFormField}
                        className="form-control"
                        placeholder={t('propertyDetail:email')}
                        onChangeHandler={this.onValueChanged}
                        value={requestContact && requestContact.email}
                      />
                    </div>
                    <div className="form-group">
                      <Field
                        field="description"
                        rows={6}
                        component={TextareaFormField}
                        className="form-control"
                        placeholder={t('propertyDetail:description')}
                        onChangeHandler={this.onValueChanged}
                        value={requestContact && requestContact.description}
                      />
                    </div>
                  </Fragment>
                }
                {this.renderButton()}
              </form>
            );
          }}
        </Form>
      </div>
    );
  }
}

FloatingForm.propTypes = {
  t: PropTypes.func.isRequired,
  postContact: PropTypes.func.isRequired,
  postContactResult: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
  }),
  onRequestContactChanged: PropTypes.func,
  requestContact: PropTypes.object,
};

FloatingForm.defaultProps = {
  postContactResult: null,
  onRequestContactChanged: null,
  requestContact: null,
};

export default translate(['propertyDetail', 'common'])(FloatingForm);
