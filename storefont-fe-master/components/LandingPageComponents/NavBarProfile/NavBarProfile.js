import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  DropdownItem,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import { noop } from 'lodash';
import Link from 'next/link';
import DropdownButton from '~/components/common/DropdownButton/DropdownButton';
import { Mobile, NotMobile } from '~/config/media';
import IconFavorious from './img/ic-favorious.svg';
import IconSaveSearch from './img/ic-save-search.svg';
import IconAccountManager from './img/ic-account-manager.svg';
import IconListingManager from './img/ic-listing-manager.svg';
import IconLogout from './img/ic-logout.svg';
import styles from './styles';

class NavBarProfile extends PureComponent {
  renderOther = () => {
    const { t, name, logoutOnClick } = this.props;
    return (
      <NotMobile>
        <DropdownButton toggleTag="a" label={`${t('welcome')} ${name}`}>
          <DropdownItem className={`${styles.item}`}>
            <IconFavorious />
            <Link href="/" replace>{t('favorious')}</Link>
          </DropdownItem>
          <DropdownItem className={`${styles.item}`}>
            <IconSaveSearch />
            <Link href="/" replace>{t('saveSearch')}</Link>
          </DropdownItem>
          <DropdownItem className={`${styles.item}`}>
            <IconAccountManager />
            <Link href="/" replace>{t('accountManager')}</Link>
          </DropdownItem>
          <DropdownItem className={`${styles.item}`}>
            <IconListingManager />
            <Link href="/" replace>{t('listingManager')}</Link>
          </DropdownItem>
          <DropdownItem className={`${styles.item}`} onClick={logoutOnClick}>
            <IconLogout />
            <Link href="/" replace>{t('logout')}</Link>
          </DropdownItem>
        </DropdownButton>
      </NotMobile>
    );
  };

  renderMobile = () => {
    const { t, logoutOnClick } = this.props;
    return (
      <Mobile>
        <Nav className={`${styles.profileMobileList}`}>
          <NavItem className={`${styles.item}`}>
            <IconFavorious />
            <Link href="/" replace>{t('favorious')}</Link>
          </NavItem>
          <NavItem className={`${styles.item}`}>
            <IconSaveSearch />
            <Link href="/" replace>{t('saveSearch')}</Link>
          </NavItem>
          <NavItem className={`${styles.item}`}>
            <IconAccountManager />
            <Link href="/" replace>{t('accountManager')}</Link>
          </NavItem>
          <NavItem className={`${styles.item}`}>
            <IconListingManager />
            <Link href="/" replace>{t('listingManager')}</Link>
          </NavItem>
          <NavItem className={`${styles.item}`} onClick={logoutOnClick}>
            <IconLogout />
            <Link href="/" replace>{t('logout')}</Link>
          </NavItem>
        </Nav>
      </Mobile>
    );
  };

  render() {
    return (
      <div className={styles.wrapper}>{this.renderMobile()}{this.renderOther()}</div>
    );
  }
}

NavBarProfile.propTypes = {
  name: PropTypes.string.isRequired,
  logoutOnClick: PropTypes.func,
  t: PropTypes.func.isRequired,
};
NavBarProfile.defaultProps = {
  logoutOnClick: noop,
};

export default NavBarProfile;
