import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field } from 'react-form';
import { NumericFormField } from '~/components/common/Forms/NumericFormField/NumericFormField';
import styles from './styles';

class AreaRange extends Component {
  onChange = (fieldName, newValue) => {
    const { field, fieldApi, t } = this.props;
    const { values, touched } = fieldApi.getFormState();
    if (!touched || !touched[field]) return;

    if (touched[field].toArea && fieldName && fieldName[1] === 'fromArea') {
      const { toArea } = values[field];
      if (newValue > toArea) {
        const fromErrorMessage = t('searchResult:fromAreaShouldLessThanToArea');
        fieldApi.setError(fieldName, fromErrorMessage);
      } else {
        fieldApi.setError(fieldName, null);
        fieldApi.setError([field, 'toArea'], null);
      }
    } else if (touched[field].fromArea && fieldName && fieldName[1] === 'toArea') {
      const { fromArea } = values[field];
      if (newValue < fromArea) {
        const toErrorMessage = t('searchResult:toAreaShouldGreaterThanFromArea');
        fieldApi.setError(fieldName, toErrorMessage);
      } else {
        fieldApi.setError(fieldName, null);
        fieldApi.setError([field, 'fromArea'], null);
      }
    }
  }

  render() {
    const {
      field, fieldApi,
      t, fromAreaDefaultValue, toAreaDefaultValue,
    } = this.props;
    const { errors } = fieldApi.getFormState();
    let areaRangeError = {};
    if (errors && errors[field]) {
      areaRangeError = errors[field];
    }

    return (
      <section className={`row ${styles.areaRange}`}>
        <div className="col-md-6">
          <label className={`${styles.priceLabel}`}>{t('common:from')}</label>
          <div className="input-group">
            <Field
              field="fromArea"
              component={NumericFormField}
              defaultValue={fromAreaDefaultValue}
              onChange={this.onChange}
            />
            <span className="input-group-addon">m<sup>2</sup></span>
          </div>
          {
            areaRangeError.fromArea && (
              <div className={`${styles.error}`}>
                {areaRangeError.fromArea}
              </div>
            )
          }
        </div>

        <div className={classnames(`col-md-6 ${styles.paddingLeft}`)}>
          <label className={`${styles.priceLabel}`}>{t('common:to')}</label>
          <div className="input-group">
            <Field
              field="toArea"
              component={NumericFormField}
              defaultValue={toAreaDefaultValue}
              onChange={this.onChange}
            />
            <span className="input-group-addon">m<sup>2</sup></span>
          </div>
          {
            areaRangeError.toArea && (
              <div className={`${styles.error}`}>
                {areaRangeError.toArea}
              </div>
            )
          }
        </div>
      </section>
    );
  }
}

AreaRange.propTypes = {
  field: PropTypes.string.isRequired,
  fieldApi: PropTypes.object.isRequired,
  fromAreaDefaultValue: PropTypes.number,
  toAreaDefaultValue: PropTypes.number,
  t: PropTypes.func.isRequired,
};

AreaRange.defaultProps = {
  fromAreaDefaultValue: 0,
  toAreaDefaultValue: 0,
};

export default AreaRange;
