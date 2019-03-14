import React, { Fragment } from 'react';
import icLogo from '../img/ic-logo.png';
import LoginForm from '../LoginForm';
import styles from './styles';

export const configUI = {
  showHeader: false,
};

export default () => (
  <Fragment>
    <div className={`${styles.logo} d-flex justify-content-center`}><img src={icLogo} alt="logo" /></div>
    <LoginForm />
  </Fragment>
);
