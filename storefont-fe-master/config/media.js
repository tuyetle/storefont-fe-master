import React from 'react';
import Responsive from 'react-responsive';
import PropTypes from 'prop-types';

const Mobile = ({ children, component }) =>
  <Responsive maxWidth={767} component={component}> {children} </Responsive>;

const Desktop = ({ children, component }) =>
  <Responsive minWidth={1024} component={component}> {children} </Responsive>;

const Tablet = ({ children, component }) =>
  <Responsive minWidth={768} maxWidth={1023} component={component}> {children} </Responsive>;

const NotMobile = ({ children, component }) =>
  <Responsive minWidth={768} component={component}> {children} </Responsive>;

Mobile.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.string,
};

Mobile.defaultProps = {
  component: '',
};

Desktop.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.string,
};

Desktop.defaultProps = {
  component: '',
};

Tablet.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.string,
};

Tablet.defaultProps = {
  component: '',
};

NotMobile.propTypes = {
  children: PropTypes.any.isRequired,
  component: PropTypes.string,
};

NotMobile.defaultProps = {
  component: '',
};

export { Mobile, Desktop, Tablet, NotMobile };
