import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import NumberFormat from 'react-number-format';
import { withField } from 'react-form';
import { isEmpty, isNaN, isFunction, noop } from 'lodash';
import { NUMBER_FORMAT_TYPE } from '~/shared/config/localization';
import { formatPrice } from '~/shared/services/formats';
import { MAX_LENGTH_PRICE } from '~/config/config';
import styles from './styles';

export class PriceFormField extends Component {
  constructor(props) {
    super(props);
    const { fieldApi: { value }, billionLabelForUnit, millionLabelForUnit } = props;
    if (value >= 1000) {
      this.state = { value: this.formatPrice(value / 1000), unitText: billionLabelForUnit };
    } else {
      this.state = { value, unitText: millionLabelForUnit };
    }
  }

  onFocusHandle = (e) => {
    if (isEmpty(this.state.unitText)) {
      this.setState({ unitText: this.props.millionLabelForUnit });
    }

    if (this.state.unitText === this.props.billionLabelForUnit) {
      const trueValue = numeral(e.target.value).value();
      this.setState({
        value: this.formatPrice(trueValue * 1000),
        unitText: this.props.millionLabelForUnit,
      });
    }
  }

  onBlurHandle = (e) => {
    if (!isEmpty(e.target.value)) {
      const trueValue = numeral(e.target.value).value();
      if (trueValue >= 1000 && this.state.unitText === this.props.millionLabelForUnit) {
        this.setState({
          value: this.formatPrice(trueValue / 1000),
          unitText: this.props.billionLabelForUnit,
        });
      } else {
        this.setState({
          value: this.formatPrice(trueValue),
          unitText: this.props.millionLabelForUnit,
        });
      }
    }

    const { fieldApi: { touched, setTouched } } = this.props;
    if (!touched) setTouched(true);
  }

  onChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({ value: isEmpty(value) ? '' : this.formatPrice(value) });
    const formatedValue = numeral(value).value();
    const realValue = this.state.unitText === this.props.billionLabelForUnit ?
      formatedValue * 1000 : formatedValue;

    const { fieldApi: { fieldName, setValue }, onChange } = this.props;
    setValue(realValue);
    if (isFunction(onChange)) {
      onChange(fieldName, realValue);
    }
  }

  formatPrice = val => formatPrice(val, NUMBER_FORMAT_TYPE);

  render() {
    const {
      fieldApi: { error, touched },
      isSecretPrice, defaultValue,
    } = this.props;
    const errorClass = touched && error ? `${styles.error}` : '';
    const disabledClass = isSecretPrice ? `${styles.disabled}` : '';

    let fieldValue = this.state.value;
    if (touched) {
      fieldValue = isNaN(fieldValue) ? '' : fieldValue;
    } else {
      fieldValue = fieldValue || defaultValue || '';
    }

    return (
      <div className="input-group">
        <NumberFormat
          onFocus={this.onFocusHandle}
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandle}
          value={fieldValue}
          thousandSeparator={numeral.localeData().delimiters.thousands}
          decimalSeparator={numeral.localeData().delimiters.decimal}
          maxLength={MAX_LENGTH_PRICE.maxLength}
          allowNegative={false}
          placeholder={this.props.placeholder}
          className={`form-control ${disabledClass} ${errorClass}`}
        />
        <span className="input-group-addon" >{isEmpty(this.state.unitText) ? this.props.millionLabelForUnit : this.state.unitText}</span>
      </div>
    );
  }
}

PriceFormField.propTypes = {
  fieldApi: PropTypes.object.isRequired,
  isSecretPrice: PropTypes.bool,
  billionLabelForUnit: PropTypes.string.isRequired,
  millionLabelForUnit: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
};

PriceFormField.defaultProps = {
  isSecretPrice: false,
  placeholder: null,
  defaultValue: 0,
  onChange: noop,
};

export default withField(PriceFormField);
