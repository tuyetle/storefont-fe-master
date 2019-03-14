import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MarkerIcon from '~/static/assets/img/location.svg';
// import ViewMoreIcon from '~/static/assets/img/ic-eye.svg';
import avatar from './img/avatar.png';
import styles from './styles';

const HeaderContactForm = ({ contact }) => (
  <div className={styles.wrapperHeader}>
    <div className={styles.wrapperAvatar}>
      <img
        src={avatar}
        alt="avatar"
        className={classNames('rounded-circle', `${styles.avarta}`)}
      />
    </div>
    <p className={styles.name}>{contact.name}</p>
    <p className={styles.company}>{contact.company}</p>
    <div>
      <MarkerIcon className={styles.iconLocation} />
      <span className={classNames('text-muted', `${styles.address}`)}>
        {contact.address}
      </span>
    </div>
    {/*
    /// TODO:
    Feb 02 2018:
    * waiting for requirement for this section
    * rem this section temporarily

    <div className={styles.viewmoreWrapper}>
      <button type="submit" className={styles.btnViewmore}>
        <ViewMoreIcon className={styles.viewMoreIcon} />
        { t(`viewmore`)}
      </button>
    </div>
     */}
  </div>
);

HeaderContactForm.propTypes = {
  contact: PropTypes.object,
  // t: PropTypes.func.isRequired,
};

// TODO: Using mockdata
HeaderContactForm.defaultProps = {
  contact: {},
};

export default translate(['propertyDetail'])(HeaderContactForm);
