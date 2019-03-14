import React from 'react';
import classNames from 'classnames';
import Proptypes from 'prop-types';
import icons from './Icons';
import styles from './styles';

const IconUtilityDisplaying = (props) => {
  const activeClass = props.isChecked ? styles.active : '';
  const Icon = icons[props.name];
  const { className } = props;
  return (
    <label className={classNames(`${className} ${styles.utility} ${activeClass}`)}>
      {icons[props.name] ? <span className={classNames(`${className} ${styles.icUtility}`)}><Icon /></span> : null}
      <span className={styles.utilityLabel}>{props.label}</span>
    </label>
  );
};

IconUtilityDisplaying.propTypes = {
  name: Proptypes.string,
  label: Proptypes.string,
  isChecked: Proptypes.bool,
  className: Proptypes.string,
};

IconUtilityDisplaying.defaultProps = {
  name: '',
  label: '',
  isChecked: false,
  className: '',
};

export default IconUtilityDisplaying;
