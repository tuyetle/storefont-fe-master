import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'lodash';
import Checkbox from '~/components/common/Checkbox/Checkbox';
import styles from './styles';

class CheckboxFormField extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: props.checked };
  }

  componentWillReceiveProps = (nextProps) => {
    if (!isNil(nextProps.checked)) {
      this.setState({ checked: nextProps.checked });
    }
  }

  onClickHandler = (e) => {
    const { fieldName, setValue, setTouched } = this.props.fieldApi;
    setTouched(true);
    setValue(e.target.checked);
    this.props.onChangeHandler(fieldName, e);
  };

  render() {
    const { error } = this.props.fieldApi;

    if (this.state.checked) {
      return (
        <Checkbox
          checked
          onClick={this.onClickHandler}
        />
      );
    }

    return (
      <Fragment>
        <Checkbox
          onClick={this.onClickHandler}
        />
        {error && (<span className={styles.errorText}>{error}</span>)}
      </Fragment>
    );
  }
}

CheckboxFormField.propTypes = {
  checked: PropTypes.bool,
  fieldApi: PropTypes.object,
  onChangeHandler: PropTypes.func.isRequired,
};

CheckboxFormField.defaultProps = {
  checked: false,
  fieldApi: null,
};

export default CheckboxFormField;
