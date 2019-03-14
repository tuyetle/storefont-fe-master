import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import numeral from 'numeral';
import withLabelAndMessage from '~/hocs/withLabelAndMessage/withLabelAndMessage';
import styles from './styles';

const UnitNumericFormField = (props) => {
  const { error, touched } = props.meta;
  const errorLabel = touched && error ? styles.error : '';

  return (props.after ?
    (
      <div className={`input-group ${errorLabel}`}>
        <NumberFormat
          id={props.id}
          className="form-control"
          thousandSeparator={numeral.localeData().delimiters.thousands}
          decimalSeparator={numeral.localeData().delimiters.decimal}
          allowNegative={props.allowNegative}
          {...props.input}
        />
        <span className="input-group-addon">{props.addon}</span>
      </div>
    )
    :
    (
      <div className={`input-group ${errorLabel}`}>
        <span className="input-group-addon">{props.addon}</span>
        <NumberFormat
          id={props.id}
          className="form-control"
          thousandSeparator={numeral.localeData().delimiters.thousands}
          decimalSeparator={numeral.localeData().delimiters.decimal}
          allowNegative={props.allowNegative}
          {...props.input}
        />
      </div>
    )
  );
};

UnitNumericFormField.propTypes = {
  id: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
  after: PropTypes.bool,
  addon: PropTypes.string.isRequired,
  allowNegative: PropTypes.bool,
};

UnitNumericFormField.defaultProps = {
  after: true,
  allowNegative: false,
};

export default withLabelAndMessage(UnitNumericFormField);
