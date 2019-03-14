import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Radio from 'antd/lib/radio';
import { noop } from 'lodash';

import styles from './styles';


class RadioGroup extends PureComponent {
  render() {
    const RButton = Radio.Button;
    const RGroup = Radio.Group;

    const {
      options, defaultValue, input, size, className,
    } = this.props;
    delete input.value;// Delete value when using defaultValue

    const listOptions = options.map(option => (
      <RButton name={input.name} value={option.value} key={option.value} className={className}>
        {option.label}
      </RButton>));

    return (
      <RGroup
        className={`${styles.radioGroupItem}`}
        {...input}
        defaultValue={defaultValue}
        size={size}
        onChange={this.props.onChange}
      >
        {listOptions}
      </RGroup>
    );
  }
}

RadioGroup.propTypes = {
  size: PropTypes.string,
  input: PropTypes.object,
  defaultValue: PropTypes.any,
  options: PropTypes.array,
  onChange: PropTypes.func,
  className: PropTypes.string,
};

RadioGroup.defaultProps = {
  size: 'large',
  input: {},
  defaultValue: null,
  options: [],
  onChange: noop,
  className: '',
};

export default RadioGroup;
