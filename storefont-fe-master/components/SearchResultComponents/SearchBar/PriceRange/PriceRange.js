import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field } from 'react-form';
import { PriceFormField } from '~/components/common/Forms/PriceFormField/PriceFormField';
import styles from './styles';

class PriceRange extends Component {
  onChange = (fieldName, newValue) => {
    const { field, fieldApi, t } = this.props;
    const { values, touched } = fieldApi.getFormState();
    if (!touched || !touched[field]) return;

    if (touched[field].toPrice && fieldName && fieldName[1] === 'fromPrice') {
      const { toPrice } = values[field];
      if (newValue > toPrice) {
        const fromErrorMessage = t('searchResult:fromPriceShouldLessThanToPrice');
        fieldApi.setError(fieldName, fromErrorMessage);
      } else {
        fieldApi.setError(fieldName, null);
        fieldApi.setError([field, 'toPrice'], null);
      }
    } else if (touched[field].fromPrice && fieldName && fieldName[1] === 'toPrice') {
      const { fromPrice } = values[field];
      if (newValue < fromPrice) {
        const toErrorMessage = t('searchResult:toPriceShouldGreaterThanFromPrice');
        fieldApi.setError(fieldName, toErrorMessage);
      } else {
        fieldApi.setError(fieldName, null);
        fieldApi.setError([field, 'fromPrice'], null);
      }
    }
  }

  render() {
    const {
      t, fromPriceLabel, fromPriceDefaultValue,
      toPriceLabel, toPriceDefaultValue,
      billionLabelForUnit, millionLabelForUnit,
      field, fieldApi,
    } = this.props;

    const { errors } = fieldApi.getFormState();
    let priceRangeError = {};
    if (errors && errors[field]) {
      priceRangeError = errors[field];
    }

    return (
      <section className={`${styles.priceRange}`}>
        <div className="row">
          <div className={classnames('col-md-6')}>
            <label className={`${styles.priceLabel}`}>{t('common:from')}</label>
            <Field
              field="fromPrice"
              component={PriceFormField}
              placeholder={fromPriceLabel}
              billionLabelForUnit={billionLabelForUnit}
              millionLabelForUnit={millionLabelForUnit}
              defaultValue={fromPriceDefaultValue}
              onChange={this.onChange}
            />
            {
              priceRangeError.fromPrice && (
                <div className={`${styles.error}`}>
                  {priceRangeError.fromPrice}
                </div>
              )
            }
          </div>

          <div className={classnames(`col-md-6 ${styles.paddingLeft}`)}>
            <label className={`${styles.priceLabel}`}>{t('common:to')}</label>
            <Field
              field="toPrice"
              component={PriceFormField}
              placeholder={toPriceLabel}
              billionLabelForUnit={billionLabelForUnit}
              millionLabelForUnit={millionLabelForUnit}
              defaultValue={toPriceDefaultValue}
              onChange={this.onChange}
            />
            {
              priceRangeError.toPrice && (
                <div className={`${styles.error}`}>
                  {priceRangeError.toPrice}
                </div>
              )
            }
          </div>
        </div>
      </section>
    );
  }
}

PriceRange.propTypes = {
  field: PropTypes.string.isRequired,
  fieldApi: PropTypes.object.isRequired,
  billionLabelForUnit: PropTypes.string.isRequired,
  millionLabelForUnit: PropTypes.string.isRequired,
  fromPriceLabel: PropTypes.string,
  toPriceLabel: PropTypes.string,
  fromPriceDefaultValue: PropTypes.number,
  toPriceDefaultValue: PropTypes.number,
  t: PropTypes.func.isRequired,
};

PriceRange.defaultProps = {
  fromPriceLabel: null,
  toPriceLabel: null,
  fromPriceDefaultValue: 0,
  toPriceDefaultValue: 0,
};

export default PriceRange;
