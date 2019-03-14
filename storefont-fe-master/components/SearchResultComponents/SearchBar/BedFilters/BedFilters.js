import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import Checkbox from '~/components/common/Checkbox/Checkbox';
import styles from './styles';

class BedFilters extends Component {
  constructor(props) {
    super(props);
    let arr = [];
    const {
      fieldApi: { value },
    } = props;
    if (value) {
      arr = value;
    } else if (props.defaultValue) {
      arr = props.defaultValue;
    }

    this.state = { value: arr };
  }

  onChangeHandle = value => (event) => {
    const arr = [...this.state.value];
    if (event.target.checked) {
      arr.push(value);
    } else {
      arr.splice(arr.indexOf(value), 1);
    }

    const {
      fieldApi: { setValue, setTouched },
    } = this.props;
    setTouched(true);
    setValue(arr);
    this.setState({ value: arr });
  };

  isContainInDefaultValue = (value) => {
    const arr = this.state.value;
    if (!isEmpty(arr) && arr.includes(value)) {
      return true;
    }

    return false;
  };

  render() {
    return (
      <section className={`${styles.bedFilters}`}>
        <div>
          {
            this.props.bedOptionsConfig.map(({ label, value }) => (
              <label className={`${styles.item}`} key={label}>
                <Checkbox
                  value={value}
                  onChange={this.onChangeHandle(value)}
                  defaultChecked={this.isContainInDefaultValue(value)}
                />
                <span className={`${styles.textInfo}`} >{label}</span>
              </label>
            ))
          }
        </div>
      </section>
    );
  }
}

BedFilters.propTypes = {
  fieldApi: PropTypes.object.isRequired,
  defaultValue: PropTypes.array,
  bedOptionsConfig: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

BedFilters.defaultProps = {
  defaultValue: [],
};

export default BedFilters;
