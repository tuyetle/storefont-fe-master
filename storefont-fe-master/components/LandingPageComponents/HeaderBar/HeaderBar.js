import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { values, isNil } from 'lodash';
import classNames from 'classnames';
import { Navbar, NavbarBrand, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
import { Mobile, NotMobile } from '~/config/media';
import { Router } from '~/shared/routes';
import { css } from 'glamor';
import AnchorList from '~/components/AnchorList/AnchorList';
import { headerConfig } from '~/config/anchorConfig';
import NavBarProfile from '~/components/LandingPageComponents/NavBarProfile/NavBarProfile';
import { POST_LISTING_STEP_1, REGISTER, LOGIN } from '~/config/routerConfig';
import { configUI as configUILoginModal } from '~/components/LoginForm/Modal/LoginFormModal';
import SvgLogo from '~/static/assets/img/logo.svg';
import styles from './styles';
import AnnonymousImg from './img/annonymous.png';

class HeaderBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
    };

    this.showLoginHandler = this.showLoginHandler.bind(this);
    this.navigateToPostListing = this.navigateToPostListing.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  showLoginHandler = (e) => {
    e.preventDefault();
    this.props.showModal({ currentModal: 'login', configUI: configUILoginModal });
  };

  navigateToPostListing = (e) => {
    e.preventDefault();
    if (this.props.isLogin) {
      Router.pushRoute(POST_LISTING_STEP_1);
    } else {
      this.props.showModal({ currentModal: 'login', configUI: configUILoginModal });
    }
  };

  renderOther = () => {
    const {
      t, showMenu, showCreateListingButton, isLogin, name, logoutOnClick,
    } = this.props;

    const anchorListTranslated = values(headerConfig.anchorConfig).map((item, index) => ({ key: +index, label: t(`common:${item.label}`), id: item.id }));

    return (
      <NotMobile>
        <div className={styles.headerContainer}>
          <Navbar expand="md">
            <NavbarBrand className={`${styles.logo}`} href="/"><SvgLogo /></NavbarBrand>
            <Nav className={`mr-auto ${styles.anchors}`}>
              {showMenu && (
                <NavItem className="text-uppercase">
                  <AnchorList anchors={anchorListTranslated} />
                </NavItem>)}
              {showCreateListingButton && (
                <NavItem>
                  <button href="/" className={`${styles.btnPostListing}`} onClick={this.navigateToPostListing}>{t('common:postListingFree')}</button>
                </NavItem>)}
            </Nav>
            {
              isLogin ?
                <Nav className={`ml-auto ${styles.navLogined}`}>
                  <NavItem>
                    {
                      !isNil(name) &&
                        <NavBarProfile logoutOnClick={logoutOnClick} t={t} name={name} />
                    }
                  </NavItem>
                  <NavItem >
                    <img className={styles.avatar} src={AnnonymousImg} alt="avatar" />
                  </NavItem>
                </Nav> :
                <Nav className={`ml-auto ${styles.navLogin}`}>
                  <NavItem>
                    <button
                      className={styles.authButton}
                      onClick={this.showLoginHandler}
                    >
                      {t('login')}
                    </button>
                  </NavItem> |
                  <NavItem>
                    <Link href={REGISTER}>
                      {/* Need using classname on a tag: https://github.com/zeit/next.js/issues/272 */}
                      <a href="/" className={`${styles.authButton}`}>{t('common:register')}</a>
                    </Link>
                  </NavItem>
                </Nav>
            }
          </Navbar>
        </div>
      </NotMobile>
    );
  }

  renderMobile = () => {
    const {
      t, showMenu, showCreateListingButton, isLogin, name, showModal, logoutOnClick, url,
    } = this.props;
    const anchorListTranslated = values(headerConfig.anchorConfig).map((item, index) => ({ key: +index, label: t(`common:${item.label}`), id: item.id }));
    this.showLoginHandler = (e) => {
      e.preventDefault();
      showModal({ currentModal: 'login' });
    };
    const urlBackLogin =(url && url.pathname) && {query: { urlBack: url.pathname }};
    
    return (
      <Mobile>
        <Navbar className={`${styles.navBarWrapper}`}>
          <NavbarBrand className={`${styles.logo}`} href="/"><SvgLogo /></NavbarBrand>
          <NavbarToggler
            onClick={this.toggleNavbar}
            className={classNames(`${styles.navbarToggler}`, this.state.collapsed ? '' : 'showHambuger')}
          >
            <span />
            <span />
            <span />
          </NavbarToggler>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <div className={styles.showNavMenu}>
              <Nav navbar className={`mr-auto ${styles.anchors}`}>
                {showMenu && (
                  <NavItem className="text-uppercase">
                    <AnchorList anchors={anchorListTranslated} />
                  </NavItem>)}
                {showCreateListingButton && (
                  <NavItem>
                    <button href="/" className={`${styles.btnPostListing}`} onClick={this.navigateToPostListing}>{t('common:postListingFree')}</button>
                  </NavItem>)}
              </Nav>
              {
                isLogin ?
                  <Nav className={`ml-auto ${styles.navLogined}`}>
                    <NavItem >
                      <img src={AnnonymousImg} alt="avatar" />
                      <div className={css(styles.avartarInfo)}>{`${t('welcome')}, ${name}`}</div>
                    </NavItem>
                    <NavItem >
                      {
                        !isNil(name) &&
                        <NavBarProfile logoutOnClick={logoutOnClick} t={t} name={name} />
                      }
                    </NavItem >
                  </Nav>
                  :
                  <Nav className={`ml-auto ${styles.navLogin}`}>
                    <NavItem>
                      <Link
                        href={{
                          pathname: LOGIN,
                          ...urlBackLogin
                        }}
                      >
                        <a href="/" className={`${styles.registerLink}`}>{t('login')}</a>
                      </Link>
                    </NavItem>
                    <NavItem>
                      <Link href={REGISTER}>
                        <a href="/" className={`${styles.registerLink}`}>{t('common:register')}</a>
                      </Link>
                    </NavItem>
                  </Nav>
              }
            </div>
            <div className={styles.showOpacityMenu}>&nbsp;</div>
          </Collapse>
        </Navbar>
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

HeaderBar.propTypes = {
  t: PropTypes.func.isRequired,
  showMenu: PropTypes.bool,
  showCreateListingButton: PropTypes.bool,
  isLogin: PropTypes.bool.isRequired,
  name: PropTypes.string,
  logoutOnClick: PropTypes.func.isRequired,
  showModal: PropTypes.func,
  url: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

HeaderBar.defaultProps = {
  showMenu: true,
  showCreateListingButton: true,
  name: null,
  showModal: null,
  url: null,
};

export default HeaderBar;
