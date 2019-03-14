import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './styles';

const LPSection = props => (
  <section className={`${props.className} ${styles.section}`}>
    <div className="container">
      <h1 className={classNames(`${styles.title}`, 'text-center')}>
        {props.title}
      </h1>
      {props.children}
    </div>
  </section>
);

LPSection.propTypes = {
  className: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};

LPSection.defaultProps = {
  children: '',
};

export default LPSection;
