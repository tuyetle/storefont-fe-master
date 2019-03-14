import React from 'react';
import PropTypes from 'prop-types';
import SvgInline from 'react-svg-inline';
import styles from './styles';
import icons from './Icons';

const IconUtility = (props) => {
  const activeClass = props.isChecked ? styles.active : '';

  return (
    <label className={`${styles.utility} ${activeClass}`}>
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={props.onChange}
        name={props.name}
        className={`${styles.chkUtility}`}
      />
      {icons[props.name] ? <span><SvgInline className={`${styles.icUtility}`} svg={icons[props.name]} /></span> : null}
      {props.label}
    </label>
  );
};

IconUtility.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  isChecked: PropTypes.bool,
};

IconUtility.defaultProps = {
  name: '',
  label: '',
  onChange: PropTypes.func,
  isChecked: false,
};

export default IconUtility;
