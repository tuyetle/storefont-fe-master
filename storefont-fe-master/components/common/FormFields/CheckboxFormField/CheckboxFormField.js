import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '~/components/common/Checkbox/Checkbox';

const CheckboxFormField = props => (
  <Checkbox {...props.input} />
);

CheckboxFormField.propTypes = {
  input: PropTypes.object,
};

CheckboxFormField.defaultProps = {
  input: null,
};

export default CheckboxFormField;
