import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import styles from './styles';

export class SelectFormField extends PureComponent {
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

  renderOption = (opt) => {
    const isSelected = this.state.value === opt.value;
    if (isSelected) return (<option key={opt.name} value={opt.value} selected>{opt.name}</option>);

    return (<option key={opt.name} value={opt.value}>{opt.name}</option>);
  };

  render() {
    const { error } = this.props.fieldApi;

    const {
      placeholder, className, errorClass, id, options,
    } = this.props;

    const errorClassname = error ? (errorClass || `${styles.error}`) : null;
    return (
      <Fragment>
        <select
          id={id}
          className={isNil(errorClassname) ? `${className}` : `${className} ${errorClassname}`}
          onBlur={this.onBlurHandler}
          onFocus={this.onFocusHandler}
          onChange={this.onChangeHandler}
        >
          {!isNil(placeholder) && (<option value="">{placeholder}</option>)}
          {options.map(opt => this.renderOption(opt))}
        </select>
        {error && (<span className={styles.errorText}>{error}</span>)}
      </Fragment>
    );
  }
}

SelectFormField.propTypes = {
  id: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string,
  errorClass: PropTypes.string,
  placeholder: PropTypes.string,
  fieldApi: PropTypes.object,
  onBlurHandler: PropTypes.func,
  onChangeHandler: PropTypes.func.isRequired,
  value: PropTypes.string,
};

SelectFormField.defaultProps = {
  id: '',
  options: [],
  className: '',
  errorClass: '',
  placeholder: null,
  fieldApi: null,
  onBlurHandler: null,
  value: null,
};

export default SelectFormField;
