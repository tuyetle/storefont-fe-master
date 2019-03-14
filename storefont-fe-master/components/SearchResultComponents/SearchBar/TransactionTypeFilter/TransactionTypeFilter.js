import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radio from 'antd/lib/radio';
import styles from './styles';

class TransactionTypeFilter extends PureComponent {
  onChangeHandler = (evt) => {
    const {
      fieldApi: { setValue, setTouched },
    } = this.props;
    setTouched(true);
    setValue(evt.target.value);
  };

  render() {
    const RButton = Radio.Button;
    const RGroup = Radio.Group;

    const {
      options, defaultValue, size, className, ...rest
    } = this.props;

    const listOptions = options.map(option => (
      <RButton value={option.value} key={option.value} className={className}>
        {option.label}
      </RButton>));

    return (
      <RGroup
        {...rest}
        className={`${styles.radioGroupItem}`}
        defaultValue={defaultValue}
        size={size}
        onChange={this.onChangeHandler}
      >
        {listOptions}
      </RGroup>
    );
  }
}

TransactionTypeFilter.propTypes = {
  size: PropTypes.string,
  defaultValue: PropTypes.any,
  options: PropTypes.array,
  className: PropTypes.string,

  fieldApi: PropTypes.object.isRequired,
};

TransactionTypeFilter.defaultProps = {
  size: 'large',
  defaultValue: 'sell',
  options: [],
  className: '',
};

export default TransactionTypeFilter;
