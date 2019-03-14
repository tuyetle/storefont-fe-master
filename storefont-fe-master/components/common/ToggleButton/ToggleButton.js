import React from 'react';
import PropTypes from 'prop-types';
import newId from '~/utils/newId';
import styles from './ToggleButton.css';

const ToggleButton = ({
  defaultChecked, onClickHandler, id, label,
}) =>
  (
    <div>
      <input
        defaultChecked={defaultChecked}
        className={`${styles.tgl} ${styles.tglBtnInput}`}
        type="checkbox"
        id={id}
        onChange={event => onClickHandler(event.target.checked)}
      />
      {/* eslint-disable */}
            <label
              className={styles.tglBtn}
              htmlFor={id}
            ></label>
            {/* eslint-enable */}
    </div>
  );

ToggleButton.propTypes = {
  defaultChecked: PropTypes.bool,
  label: PropTypes.string,
  onClickHandler: PropTypes.func,
  id: PropTypes.string,
};

ToggleButton.defaultProps = {
  defaultChecked: false,
  label: '',
  onClickHandler: null,
  id: newId(),
};

export default ToggleButton;
