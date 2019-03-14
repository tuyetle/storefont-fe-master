import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { noop } from 'lodash';
import businessActions from '~/actions/BusinessActions';
import { FORGET_PASSWORD } from '~/actions/BusinessActionTypes';
import uIActions from '~/actions/UIActions';
import { OPEN_MODAL } from '~/actions/UIActionTypes';
import ForgotPasswordForm from '~/components/ForgotPasswordForm/ForgotPasswordForm';
import { makeForgetPassowordSelector } from './ForgotPasswordSelector';

const ForgotPassword = props => (
  <ForgotPasswordForm
    {...props}
    showModal={props.showModal}
    forgotPassword={props.forgotPassword}
    onBack={props.url.back}
  />
);

const mapStateToProps = createStructuredSelector({
  isSuccess: makeForgetPassowordSelector(),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      forgotPassword: businessActions[FORGET_PASSWORD],
      showModal: uIActions[OPEN_MODAL],
    },
    dispatch,
  );

ForgotPassword.propTypes = {
  isSuccess: PropTypes.bool,
  url: PropTypes.shape({
    back: PropTypes.func,
  }).isRequired,
  showModal: PropTypes.func,
  forgotPassword: PropTypes.func,
};

ForgotPassword.defaultProps = {
  isSuccess: false,
  showModal: noop,
  forgotPassword: noop,
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);
