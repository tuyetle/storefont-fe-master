import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-form';
import { noop } from 'lodash';
import HeaderForgotPasswordForm from './HeaderForgotPasswordForm/HeaderForgotPasswordForm';
import FooterForgotPasswordForm from './FooterForgotPasswordForm/FooterForgotPasswordForm';
import ForgotPasswordContent from './ForgotPasswordContent/ForgotPasswordContent';
import ForgotPasswordSuccess from './ForgotPasswordSuccess/ForgotPasswordSuccess';
import styles from './styles';


class ForgotPasswordForm extends PureComponent {
  onSubmitForm = (submittedValues) => {
    this.props.forgotPassword(submittedValues);
    this.emailOrPhone = submittedValues;
  };
  onSubmitAgain = () => {
    this.props.forgotPassword(this.emailOrPhone);
  };
  render() {
    return (
      <div className={styles.backgroundImage}>
        <div className={`${styles.contain}`} >
          <HeaderForgotPasswordForm onBack={this.props.onBack} />
          <div className={`${styles.form}`}>
            {
              !this.props.isSuccess ?
                <Form
                  onSubmit={this.onSubmitForm}
                  component={ForgotPasswordContent}
                />
                :
                <ForgotPasswordSuccess onSubmitAgain={this.onSubmitAgain} />
            }
          </div>
          <FooterForgotPasswordForm showModal={this.props.showModal} />
        </div>
      </div>
    );
  }
}

ForgotPasswordForm.propTypes = {
  isSuccess: PropTypes.bool.isRequired,
  showModal: PropTypes.func,
  forgotPassword: PropTypes.func,
  onBack: PropTypes.func.isRequired,
};

ForgotPasswordForm.defaultProps = {
  showModal: noop,
  forgotPassword: noop,
};
export default ForgotPasswordForm;
