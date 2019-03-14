import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconUtilityDisplaying from '~/components/IconUtility/IconUtilityDisplaying';
import styles from './UtilitiesAttributesStyles';

const UtilitiesAttributes = (props) => {
  const listItemsActive = props.attributes.filter(activeItem => activeItem.isChecked === true);
  const listItems = listItemsActive.map(item =>
    (
      <div className={classNames(`${styles.utilityItem}`, 'text-center')} key={item.name}>
        <IconUtilityDisplaying
          name={item.name}
          label={props.t(item.name)}
          isChecked={item.isChecked}
          className={`${styles.iconCenter}`}
        />
      </div>
    ));

  return (
    <div className={classNames('d-flex', 'flex-wrap', `${styles.wrapper}`)}>
      {listItems}
    </div>
  );
};

UtilitiesAttributes.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  t: PropTypes.func.isRequired,
};

export default UtilitiesAttributes;
