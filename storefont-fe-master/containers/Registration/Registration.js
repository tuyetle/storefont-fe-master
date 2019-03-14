import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import businessActions from '~/actions/BusinessActions';
import { REGISTRATION_REQUEST } from '~/actions/BusinessActionTypes';
import RegistrationForm from '~/components/RegistrationForm/RegistrationForm';
import { getRegistrationRequestResultSelector } from './RegistrationSelector';

const Registration = ({ registrationHandler, registrationRequestResult }) => (
  <RegistrationForm
    registrationHandler={registrationHandler}
    registrationRequestResult={registrationRequestResult}
  />);

Registration.propTypes = {
  registrationRequestResult: PropTypes.bool,
  registrationHandler: PropTypes.func.isRequired,
};
Registration.defaultProps = {
  registrationRequestResult: null,
};

const mapStateToProps = createStructuredSelector({
  registrationRequestResult: getRegistrationRequestResultSelector(),
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      registrationHandler: businessActions[REGISTRATION_REQUEST],
    },
    dispatch,
  );
const RegistrationContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);
export default RegistrationContainer;
