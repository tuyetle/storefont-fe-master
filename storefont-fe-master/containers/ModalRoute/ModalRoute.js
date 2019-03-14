import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { OPEN_MODAL, CLOSE_MODAL } from '~/actions/UIActionTypes';
import { Router } from '~/shared/routes';
import { FORGOT_PASSWORD } from '~/config/routerConfig';
import { LOGIN_REQUEST, REGISTRATION_REQUEST } from '~/actions/BusinessActionTypes';
import uIActions from '~/actions/UIActions';
import businessActions from '~/actions/BusinessActions';
import ComponentModal from '~/components/ComponentModal/ComponentModal';
import { makeSelectCurrentModal } from './UIStateSelector';
import { getLoginError } from './AuthSelector';

class ModalRoute extends PureComponent {
  dispatchLoginModal = (values) => {
    this.props.dispatchLogin({ ...values, isModal: true });
  };
  gotoForgotPassword = () => Router.pushRoute(FORGOT_PASSWORD);
  render() {
    return (
      <ComponentModal
        dispatchRegister={this.props.dispatchRegister}
        dispatchLogin={this.dispatchLoginModal}
        dispatchShowModal={this.props.dispatchShowModal}
        dispatchCloseModal={this.props.dispatchCloseModal}
        gotoForgotPassword={this.gotoForgotPassword}
        {...this.props.modalItem}
        {...this.props.responseData}
      />
    );
  }
}


ModalRoute.propTypes = {
  dispatchRegister: PropTypes.func,
  dispatchLogin: PropTypes.func,
  dispatchCloseModal: PropTypes.func,
  dispatchShowModal: PropTypes.func,
  modalItem: PropTypes.shape({
    currentModal: PropTypes.string,
    configUI: PropTypes.shape({
      showHeader: PropTypes.bool,
      title: PropTypes.string,
    }),
    data: PropTypes.object,
  }),
  responseData: PropTypes.any,
};
ModalRoute.defaultProps = {
  dispatchRegister: null,
  dispatchLogin: null,
  dispatchCloseModal: null,
  dispatchShowModal: null,
  modalItem: null,
  responseData: null,
};
const mapStateToProps = createStructuredSelector({
  modalItem: makeSelectCurrentModal(),
  responseData: getLoginError(),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      dispatchRegister: businessActions[REGISTRATION_REQUEST],
      dispatchLogin: businessActions[LOGIN_REQUEST],
      dispatchShowModal: uIActions[OPEN_MODAL],
      dispatchCloseModal: uIActions[CLOSE_MODAL],
    },
    dispatch,
  );
const ModalRouteContainer = connect(mapStateToProps, mapDispatchToProps)(ModalRoute);

export default ModalRouteContainer;
