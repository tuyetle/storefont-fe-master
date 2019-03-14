import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';
import { isFunction } from 'lodash';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import styles from './styles';

class NumericFormField extends Component {
    componentDidMount = () => {
      if (isFunction(this.props.input.onChange) && this.props.defaultValue > 0) {
        this.props.input.onChange(this.props.defaultValue);
      }
    }

    render() {
      const { error } = this.props.meta;
      const errorLabel = error ? `${styles.error}` : '';

      return (
        <NumberFormat
          id={this.props.id}
          className={`form-control ${errorLabel}`}
          thousandSeparator={numeral.localeData().delimiters.thousands}
          decimalSeparator={numeral.localeData().delimiters.decimal}
          allowNegative={this.props.allowNegative}
          placeholder={this.props.placeholder}
          {...this.props.input}
        />
      );
    }
}

NumericFormField.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  defaultValue: PropTypes.number,
  allowNegative: PropTypes.bool,
  placeholder: PropTypes.string,
};

NumericFormField.defaultProps = {
  allowNegative: false,
  placeholder: '',
  defaultValue: 0,
};

export default withLabelAndMessage(NumericFormField);
