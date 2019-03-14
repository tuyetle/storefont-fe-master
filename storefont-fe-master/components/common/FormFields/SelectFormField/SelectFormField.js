import React from 'react';
import PropTypes from 'prop-types';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import Select from '~/components/common/Select/Select';
import styles from './styles';

const SelectFormField = (props) => {
  const { error } = props.meta;
  const errorLabel = !props.meta.pristine && error && error[props.input.name] ? `${styles.error}` : '';

  return (
    <Select
      id={props.id}
      {...props.input}
      options={props.options}
      onBlur={null}
      value={props.defaultValue}
      className={errorLabel}
      placeholder={props.selectPlaceholder}
      showLabel={props.showLabel}
      onInputChange={props.onInputChange}
    />
  );
};

SelectFormField.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.string,
  selectPlaceholder: PropTypes.string,
  showLabel: PropTypes.bool,
  onInputChange: PropTypes.func,

  input: PropTypes.object.isRequired,
  meta: PropTypes.object,
};

SelectFormField.defaultProps = {
  defaultValue: '',
  selectPlaceholder: '',
  showLabel: true,
  onInputChange: null,
  meta: {},
};

export default withLabelAndMessage(SelectFormField);
