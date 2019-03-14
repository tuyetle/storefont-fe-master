import React from 'react';
import PropTypes from 'prop-types';
import withFormField from '../withFormField';

const TextareaFormField = props => (
  <textarea
    id={props.id}
    className={`${props.className} ${props.errorClass}`}
    placeholder={props.placeholder}
    value={props.value || ''}
    rows={props.rows}
    cols={props.cols}
    onBlur={props.onBlurHandler}
    onFocus={props.onFocusHandler}
    onChange={props.onChangeHandler}
  />
);

TextareaFormField.propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  rows: PropTypes.number,
  cols: PropTypes.number,
  onBlurHandler: PropTypes.func.isRequired,
  onFocusHandler: PropTypes.func.isRequired,
  onChangeHandler: PropTypes.func.isRequired,
};

TextareaFormField.defaultProps = {
  id: '',
  className: '',
  errorClass: '',
  placeholder: '',
  value: '',
  rows: 6,
  cols: 60,
};

export default withFormField(TextareaFormField);
