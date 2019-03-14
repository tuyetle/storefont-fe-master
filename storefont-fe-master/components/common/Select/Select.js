import React, { PureComponent } from 'react';
import ReactSelect from 'react-select';
import styles from './Select.css';

class Select extends PureComponent {
  render() {
    return (
      <div className={styles.Select}>
        <ReactSelect
          {...this.props}
        />
      </div>
    );
  }
}

export default Select;
