import React from 'react';
import PropTypes from 'prop-types';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import styles from './styles';

const TextareaFormField = (props) => {
  const {
    placeholder, rows, cols, meta, input,
  } = props;
  const errorClass = meta.touched && meta.error ? styles.error : '';
  // delete input.value; // Using defaultValue

  return (
    <textarea
      className={`form-control ${styles.textarea} ${errorClass}`}
      {...input}
      placeholder={placeholder}
      onChange={props.input.onChange || props.onChangeHandler}
      defaultValue={props.text}
      id={props.id}
      rows={rows}
      cols={cols}
    />
  );
};

TextareaFormField.propTypes = {
  input: PropTypes.object,
  placeholder: PropTypes.string,
  meta: PropTypes.object,
  text: PropTypes.string,
  id: PropTypes.string,
  rows: PropTypes.string,
  cols: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

TextareaFormField.defaultProps = {
  input: {},
  meta: {},
  placeholder: '',
  text: '',
  id: null,
  rows: '',
  cols: '',
  onChangeHandler: null,
};

export default withLabelAndMessage(TextareaFormField);
