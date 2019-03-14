import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

function withFormField(WrappedComponent, defaults) {
  class BaseFormField extends Component {
    constructor(props) {
      super(props);
      this.state = { value: props.value };
    }

    componentWillReceiveProps = (nextProps) => {
      this.setState({ value: nextProps.value });
    };

    onBlurHandler = (e) => {
      const { onBlurHandler } = this.props;
      const { fieldName } = this.props.fieldApi;
      if (onBlurHandler) onBlurHandler(fieldName, e);
    };

    onFocusHandler = () => this.props.fieldApi.setTouched(true);

    onChangeHandler = (e) => {
      const { fieldName, setValue } = this.props.fieldApi;
      setValue(e.target.value);
      this.props.onChangeHandler(fieldName, e);
    };

    render() {
      const { error } = this.props.fieldApi;
      const errorClassname = error ? (this.props.errorClass || `${styles.error}`) : null;
      return (
        <Fragment>
          <WrappedComponent
            {...defaults}
            {...this.props}
            onFocusHandler={this.onFocusHandler}
            onBlurHandler={this.onBlurHandler}
            onChangeHandler={this.onChangeHandler}
            value={this.state.value}
            errorClass={errorClassname}
          />
          {error && (<span className={styles.errorText}>{error}</span>)}
        </Fragment>
      );
    }
  }

  BaseFormField.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    errorClass: PropTypes.string,
    placeholder: PropTypes.string,
    fieldApi: PropTypes.object,
    onBlurHandler: PropTypes.func,
    onChangeHandler: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  BaseFormField.defaultProps = {
    id: '',
    className: '',
    errorClass: '',
    placeholder: '',
    fieldApi: null,
    onBlurHandler: null,
    value: null,
  };

  return BaseFormField;
}

export default withFormField;
