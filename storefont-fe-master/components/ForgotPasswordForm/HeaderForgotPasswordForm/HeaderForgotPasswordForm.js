import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import HeaderImage from '~/static/assets/img/header-registration.png';
import BackMobileIcon from '~/static/assets/img/ic-mobile-back.svg';
import LockIcon from '~/static/assets/img/ic-lock.svg';
import { Mobile } from '~/config/media';
import styles from './styles';


const HeaderForgotPasswordForm = props => (
  <div className={`${styles.header}`}>
    <Mobile><span className={styles.back}><a href="/" onClick={props.onBack}><BackMobileIcon /></a></span></Mobile>
    <img src={HeaderImage} alt="header" className={styles.headerImg} />
    <span className={`${styles.circile}`}>
      <LockIcon />
    </span>
  </div>
);
HeaderForgotPasswordForm.propTypes = {
  onBack: PropTypes.func,
};
HeaderForgotPasswordForm.defaultProps = {
  onBack: noop,
};
export default HeaderForgotPasswordForm;
