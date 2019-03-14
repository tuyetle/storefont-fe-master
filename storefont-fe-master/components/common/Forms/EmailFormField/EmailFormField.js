import React, { Fragment, PureComponent } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';

import {
  REQUIRED,
  WRONG_FORMAT,
} from '~/services/validations/validationTypes';
import validateError from './EmailFormFieldValidation';

import styles from './styles';

class EmailFormField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
  }

  componentWillReceiveProps = (nextProps) => {
    this.setState({ value: nextProps.value });
  };

  onBlurHandler = (e) => {
    const { setError } = this.props.fieldApi;
    const { isRequired, onBlurHandler } = this.props;

    if (isRequired) {
      const errorMsg = validateError(e.target.value, isRequired);
      setError(errorMsg);
    }

    if (onBlurHandler) onBlurHandler(e);
  };

  onFocusHandler = () => {
    this.props.fieldApi.setTouched(true);
  };

  onChangeHandler = (e) => {
    const { setValue, fieldName } = this.props.fieldApi;

    this.setState({ value: e.target.value });
    setValue(e.target.value);
    if (this.props.onChangedHandler) this.props.onChangedHandler(fieldName, e.target.value);
  };

  render() {
    const { error } = this.props.fieldApi;

    const {
      placeholder, className, errorClass, t, errorMessage,
    } = this.props;

    const errorClassname = error ? (errorClass || `${styles.error}`) : null;
    let errorMsg = '';
    if (error) {
      if (errorMessage) {
        errorMsg = errorMessage;
      } else {
        switch (error) {
        case REQUIRED:
          errorMsg = t('emailRequired');
          break;
        case WRONG_FORMAT:
          errorMsg = t('wrongFormat');
          break;
        default:
          errorMsg = '';
        }
      }
    }

    return (
      <Fragment>
        <input
          className={`form-control ${errorClassname} ${className}`}
          type="text"
          placeholder={placeholder}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          onChange={this.onChangeHandler}
          value={this.state.value || ''}
        />
        {error && (<span className={styles.error}>{errorMsg}</span>)}
      </Fragment>
    );
  }
}

EmailFormField.propTypes = {
  isRequired: PropTypes.bool,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  errorMessage: PropTypes.string,
  placeholder: PropTypes.string,
  fieldApi: PropTypes.object,
  t: PropTypes.func,
  onChangedHandler: PropTypes.func,
  onBlurHandler: PropTypes.func,
  value: PropTypes.string,
};
EmailFormField.defaultProps = {
  isRequired: false,
  placeholder: '',
  className: '',
  errorMessage: null,
  errorClass: '',
  fieldApi: null,
  t: null,
  onChangedHandler: null,
  onBlurHandler: null,
  value: null,
};

export default translate(['common'])(EmailFormField);
