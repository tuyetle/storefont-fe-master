import React from 'react';
import PropTypes from 'prop-types';
import ToggleButton from '~/components/common/ToggleButton/ToggleButton';

const ToggleFormField = props => (
  <div className="form-group">
    <ToggleButton
      id={props.id}
      onClickHandler={props.input.onChange || props.onClickHandler}
      defaultChecked={props.defaultChecked}
    />
    <span>{props.label}</span>
  </div>
);


ToggleFormField.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  input: PropTypes.object,
  defaultChecked: PropTypes.bool,
  onClickHandler: PropTypes.func,
};

ToggleFormField.defaultProps = {
  input: {},
  onClickHandler: null,
  defaultChecked: false,
  label: '',
  id: null,
};

export default ToggleFormField;
