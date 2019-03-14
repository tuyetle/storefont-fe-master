import React from 'react';
import classnames from 'classnames';
import SuggestPropertyImg from '~/assets/img/suggest-property.jpg';
import styles from './SuggestProperty.css';

const SuggestProperty = () => {
  const classNames = classnames('container', 'text-center', styles.suggestProperty);
  return (
    <div className={classNames}>
      <img alt="SuggestProperty" src={SuggestPropertyImg} />
    </div>
  );
};

export default SuggestProperty;
