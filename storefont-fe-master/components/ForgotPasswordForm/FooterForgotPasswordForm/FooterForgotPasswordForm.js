import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { noop } from 'lodash';
import BackIcon from '~/static/assets/img/ic-arrow-back-black.svg';
import styles from './styles';

class FooterForgotPasswordForm extends PureComponent {
  showLoginHandler = (e) => {
    e.preventDefault();
    this.props.showModal({ currentModal: 'login' });
  }
  render() {
    return (
      <div className={`text-center ${styles.footer}`}>
        <BackIcon className={styles.backIcon} />
        <button
          className={styles.loginButton}
          onClick={this.showLoginHandler}
        >
          {this.props.t('login')}
        </button>
      </div>
    );
  }
}

FooterForgotPasswordForm.propTypes = {
  showModal: PropTypes.func,
  t: PropTypes.func,
};
FooterForgotPasswordForm.defaultProps = {
  showModal: noop,
  t: noop,
};
export default translate(['auth'])(FooterForgotPasswordForm);

