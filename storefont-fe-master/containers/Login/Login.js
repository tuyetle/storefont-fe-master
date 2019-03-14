import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router } from '~/shared/routes';
import { FORGOT_PASSWORD } from '~/config/routerConfig';
import { createStructuredSelector } from 'reselect';
import businessActions from '~/actions/BusinessActions';
import uIActions from '~/actions/UIActions';
import LoginFormPage from '~/components/LoginForm/Page/LoginFormPage';
import { OPEN_MODAL, CLOSE_MODAL } from '~/actions/UIActionTypes';
import { LOGIN_REQUEST } from '~/actions/BusinessActionTypes';
import { getLoginError } from './LoginSelector';

class LoginPage extends PureComponent {
  gotoForgotPassword = () => Router.pushRoute(FORGOT_PASSWORD);
  render() {
    return (
      <div className="container">
        <LoginFormPage {...this.props} gotoForgotPassword={this.gotoForgotPassword} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  errors: getLoginError(),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchLogin: businessActions[LOGIN_REQUEST],
      dispatchShowModal: uIActions[OPEN_MODAL],
      dispatchCloseModal: uIActions[CLOSE_MODAL],
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
