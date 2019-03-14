import React, { Component } from 'react';
import PropTypes from 'prop-types';
import numeral from 'numeral';
import NumberFormat from 'react-number-format';
import { isEmpty, isFunction } from 'lodash';
import { NUMBER_FORMAT_TYPE } from '~/shared/config/localization';
import { formatPrice } from '~/shared/services/formats';
import { MAX_LENGTH_PRICE } from '~/config/config';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import styles from './styles';

export class PriceFormField extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultValue > 0 ? this.props.defaultValue : '', unitText: '' };
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

    if (isFunction(this.props.input.onFocus)) {
      this.props.input.onFocus();
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
    if (isFunction(this.props.input.onBlur)) {
      this.props.input.onBlur();
    }
  }
  onChangeHandler = (e) => {
    const { value } = e.target;
    this.setState({ value: isEmpty(value) ? '' : this.formatPrice(value) });
    const formatedValue = numeral(value).value();
    const realValue = this.state.unitText === this.props.billionLabelForUnit ?
      formatedValue * 1000 : formatedValue;
    this.props.input.onChange(realValue);
  }
  formatPrice = val => formatPrice(val, NUMBER_FORMAT_TYPE)
  render() {
    const { meta, isSecretPrice } = this.props;
    const errorClass = meta.touched && meta.error ? `${styles.error}` : '';
    const disabledClass = isSecretPrice ? `${styles.disabled}` : '';
    return (
      <div className="input-group">
        <NumberFormat
          {...this.props.input}
          onFocus={this.onFocusHandle}
          onChange={this.onChangeHandler}
          onBlur={this.onBlurHandle}
          value={this.state.value}
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
  isSecretPrice: PropTypes.bool,
  billionLabelForUnit: PropTypes.string.isRequired,
  millionLabelForUnit: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.number,
  input: PropTypes.object,
  meta: PropTypes.object,
};
PriceFormField.defaultProps = {
  isSecretPrice: false,
  placeholder: null,
  defaultValue: 0,
  input: {},
  meta: {},
};
export default withLabelAndMessage(PriceFormField);
