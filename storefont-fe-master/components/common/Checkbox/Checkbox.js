import React from 'react';
import styles from './styles';

const Checkbox = props => (
  <input className={`${styles.checkbox}`} type="checkbox" {...props} />
);

export default Checkbox;
