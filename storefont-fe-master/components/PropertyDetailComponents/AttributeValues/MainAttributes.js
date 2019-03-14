import React from 'react';
import { NotMobile } from '~/config/media';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconUtilityDisplaying from '~/components/IconUtility/IconUtilityDisplaying';
import PriceLabelPropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/PriceLabelPropertyDetail/PriceLabelPropertyDetail';
import SquareAttribute from './SquareAttribute';
import styles from './MainAttributesStyles';

const AREA_TYPE = 'area';

const MainAttributes = (props) => {
  const listItems = props.attributes.map(item =>
    (
      <div className="col-3 text-center" key={item.name}>
        <div className={classNames(`${styles.attribute}`)}>
          <div className={classNames(`${styles.value}`)}>
            {item.name === AREA_TYPE ?
              <SquareAttribute item={item} />
              :
              (<span className={`${styles.attributeValue}`}>{item.value} </span>)
            }
            <div className={`${styles.inline}`}>
              <NotMobile>
                <IconUtilityDisplaying
                  name={item.name}
                  className={`${styles.widthIcon}`}
                />
              </NotMobile>
              <span className={`${styles.attributeName}`}>{props.t(item.name)}</span>
            </div>
          </div>
        </div>
      </div>
    ));

  return (
    <div className={classNames(`${styles.attributes}`)}>
      <div className="row no-gutters">
        <div className={classNames(`${styles.pricePropertyWrapper}`, 'col-3 text-center')}>
          <PriceLabelPropertyDetail
            priceText={props.priceText}
          />
        </div>
        {listItems}
      </div>
    </div>
  );
};

MainAttributes.propTypes = {
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  priceText: PropTypes.number,
  t: PropTypes.func.isRequired,
};

MainAttributes.defaultProps = {
  priceText: 0,
};

export default translate(['common'])(MainAttributes);
