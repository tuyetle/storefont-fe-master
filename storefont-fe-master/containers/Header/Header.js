import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { isNil, noop } from 'lodash';
import { translate } from 'react-i18next';
import businessActions from '~/actions/BusinessActions';
import uIActions from '~/actions/UIActions';
import { LOGOUT_REQUEST, CHECK_AUTH } from '~/actions/BusinessActionTypes';
import { OPEN_MODAL } from '~/actions/UIActionTypes';
import HeaderBar from '~/components/LandingPageComponents/HeaderBar/HeaderBar';
import { makeAuthSelector } from './AuthSelector';

class Header extends PureComponent {
  componentDidMount = () => {
    if (!isNil(this.props.dispatchCheckAuth) && isNil(this.props.authState.token)) {
      this.props.dispatchCheckAuth();
    }
  }
  logout = () => {
    if (this.props.authState.token && !isNil(this.props.dispatchLogout)) {
      this.props.dispatchLogout(this.props.authState.token);
    }
  }

  render() {
    const {
      showMenu, showCreateListingButton, containerClassName,
      dispatchShowModal, t, url,
    } = this.props;
    return (
      <header className={containerClassName}>
        <Row>
          <Col>
            <HeaderBar
              showMenu={showMenu}
              showCreateListingButton={showCreateListingButton}
              isLogin={!isNil(this.props.authState.token)}
              name={this.props.authState.name}
              logoutOnClick={this.logout}
              pageLink="/search-result"
              showModal={dispatchShowModal}
              t={t}
              url={url}
            />
          </Col>
        </Row>
      </header>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  authState: makeAuthSelector(),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchLogout: businessActions[LOGOUT_REQUEST],
      dispatchShowModal: uIActions[OPEN_MODAL],
      dispatchCheckAuth: businessActions[CHECK_AUTH],
    },
    dispatch,
  );

Header.propTypes = {
  showMenu: PropTypes.bool,
  showCreateListingButton: PropTypes.bool,
  containerClassName: PropTypes.string,
  dispatchShowModal: PropTypes.func,
  dispatchLogout: PropTypes.func,
  dispatchCheckAuth: PropTypes.func,
  authState: PropTypes.shape({
    token: PropTypes.string,
    name: PropTypes.string,
  }),
  url: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  t: PropTypes.func,
};

Header.defaultProps = {
  showMenu: true,
  showCreateListingButton: true,
  containerClassName: 'container',
  dispatchShowModal: null,
  dispatchLogout: null,
  dispatchCheckAuth: null,
  authState: null,
  t: noop,
  url: null,
};

const ConnectedHeader = connect(mapStateToProps, mapDispatchToProps)(translate(['common'])(Header));
export default ConnectedHeader;
