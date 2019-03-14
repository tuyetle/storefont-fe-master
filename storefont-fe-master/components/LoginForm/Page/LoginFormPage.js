import React, { Fragment } from 'react';
import { Mobile, NotMobile } from '~/config/media';

import bg from '../img/bg-login.png';
import icLogo from '../img/ic-logo.png';
import bgHeader from '../img/bg-header.png';

import LoginForm from '../LoginForm';
import styles from './styles';

export default props => (
  <Fragment>
    <Mobile>
      <div className="mt-5">
        <LoginForm {...props} />
      </div>
    </Mobile>
    <NotMobile>
      <div className={`${styles.container} d-flex justify-content-center`}>
        <img src={bg} alt="background" className={`${styles.bg}`} />
        <div className={`${styles.wrapperForm}`}>
          <div className={`${styles.wrapperBgHeader}`}><img src={bgHeader} alt="background" className={`${styles.bgHeader}`} /></div>
          <div className={`${styles.logo} d-flex justify-content-center`}><img src={icLogo} alt="logo" /></div>
          <div className="container pl-4 pr-4">
            <LoginForm {...props} />
          </div>
        </div>
      </div>
    </NotMobile>
  </Fragment>
);
