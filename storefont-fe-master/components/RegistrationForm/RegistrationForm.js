import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { noop } from 'lodash';
import { Form } from 'react-form';
import { Mobile, NotMobile } from '~/config/media';
import RegistrationContent from '~/components/RegistrationForm/RegistrationContent/RegistrationContent';
import HeaderImage from '~/static/assets/img/header-registration.png';
import BackIcon from '~/static/assets/img/ic-arrow-back.svg';
import BackMobileIcon from '~/static/assets/img/ic-mobile-back.svg';
import FamilyIcon from '~/static/assets/img/ic-family.svg';
import styles from './styles';

const initState = { emailOrPhone: '', receiveNews: false };

export class RegistrationForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { ...initState };
  }

  onBackClick = () => {
    this.props.url.back();
  }

  onSubmitForm = (submittedValues) => {
    this.setState({
      submitted: true,
      ...this.state,
    });
    this.props.registrationHandler(submittedValues);
  };

  renderOther = () => {
    const { t, registrationRequestResult } = this.props;
    return (
      <NotMobile>
        <div className={`${styles.wrapper}`}>
          <div className={`${styles.contain}`} >
            <div className={`${styles.header}`}>
              <span className={styles.back}><a href="/" onClick={this.onBackClick}><BackIcon className={styles.backIcon} />{t('back')}</a></span>
              <img src={HeaderImage} alt="header" />
              <span className={`${styles.circile}`}>
                <FamilyIcon />
              </span>
            </div>
            <Form onSubmit={this.onSubmitForm}>
              { formApi => (
                <RegistrationContent
                  formApi={formApi}
                  registrationRequestResult={registrationRequestResult}
                />
              )}
            </Form>
          </div>
        </div>
      </NotMobile>
    );
  }

  renderMobile = () => {
    const { registrationRequestResult } = this.props;

    return (
      <Mobile>
        <div className={`${styles.contain}`} >
          <div className={`${styles.header}`}>
            <span className={styles.back}><a href="/" onClick={this.onBackClick}><BackMobileIcon /></a></span>
            <img src={HeaderImage} alt="header" />
            <span className={`${styles.circile}`}>
              <FamilyIcon />
            </span>
          </div>
          <Form onSubmit={this.onSubmitForm}>
            { formApi => (
              <RegistrationContent
                formApi={formApi}
                registrationRequestResult={registrationRequestResult}
              />
            )}
          </Form>
        </div>
      </Mobile>
    );
  }
  render() {
    return (
      <Fragment>
        {
          this.renderMobile()
        }
        {
          this.renderOther()
        }
      </Fragment>
    );
  }
}

RegistrationForm.propTypes = {
  registrationRequestResult: PropTypes.bool,
  registrationHandler: PropTypes.func,
  t: PropTypes.func,
  url: PropTypes.shape({
    back: PropTypes.func,
  }),
};

RegistrationForm.defaultProps = {
  registrationRequestResult: null,
  registrationHandler: noop,
  t() {},
  url: null,
};

export default translate(['auth'])(RegistrationForm);
