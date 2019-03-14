import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';
import { isNaN, isFunction, noop } from 'lodash';
import { withField } from 'react-form';
import styles from './styles';

export class NumericFormField extends Component {
  onChange = (values) => {
    const {
      fieldApi: {
        fieldName, touched, setValue, setTouched,
      },
      onChange,
    } = this.props;
    const { floatValue } = values;
    if (!touched) setTouched(true);

    setValue(floatValue);
    if (isFunction(onChange)) {
      onChange(fieldName, floatValue);
    }
  }

  render() {
    const {
      fieldApi: { value, touched, error }, defaultValue,
      allowNegative, placeholder,
    } = this.props;
    const errorLabel = error ? `${styles.error}` : '';

    let fieldValue = 0;
    if (touched) {
      fieldValue = isNaN(value) ? '' : value;
    } else {
      fieldValue = value || defaultValue || '';
    }

    return (
      <NumberFormat
        value={fieldValue}
        onValueChange={this.onChange}
        className={`form-control ${errorLabel}`}
        thousandSeparator={numeral.localeData().delimiters.thousands}
        decimalSeparator={numeral.localeData().delimiters.decimal}
        allowNegative={allowNegative}
        placeholder={placeholder}
      />
    );
  }
}

NumericFormField.propTypes = {
  fieldApi: PropTypes.object.isRequired,
  allowNegative: PropTypes.bool,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
};

NumericFormField.defaultProps = {
  allowNegative: false,
  placeholder: '',
  defaultValue: 0,
  onChange: noop,
};

export default withField(NumericFormField);
