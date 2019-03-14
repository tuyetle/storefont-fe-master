import React, { PureComponent } from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddressPropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/AddressPropertyDetail/AddressPropertyDetail';
import PriceLabelPropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/PriceLabelPropertyDetail/PriceLabelPropertyDetail';
import IconUtilityDisplaying from '~/components/IconUtility/IconUtilityDisplaying';
import SquareAttribute from '~/components/PropertyDetailComponents/AttributeValues/SquareAttribute';
import FloatingContactButton from '~/components/PropertyDetailComponents/FloatingContactButton/FloatingContactButton';
import HeartIcon from '~/static/assets/img/heart.svg';
import styles from './styles';

const AREA_TYPE = 'area';

export class FloatingHeader extends PureComponent {
  render() {
    const {
      t, attributes, address, transactionType, priceText,
      postContact, postContactResult, requestContact,
      onRequestContactChanged,
    } = this.props;

    const FavoritedIcon = HeartIcon;

    const listItems = attributes.map(item =>
      (
        <div className={`${styles.inline}`} key={item.name}>
          <IconUtilityDisplaying
            name={item.name}
            className={`${styles.widthIcon}`}
          />
          {item.name === AREA_TYPE ?
            <SquareAttribute item={item} />
            :
            (<span className={`${styles.attributeValue}`}>{item.value} </span>)
          }
        </div>
      ));

    return (
      <div className={styles.floatingPropertyDetail}>
        <div className="container">
          <div className={classNames('row', `${styles.wrapper}`)}>
            <div className="col-12 col-md-7">
              <AddressPropertyDetail
                address={address}
                transactionType={transactionType}
              />
              <PriceLabelPropertyDetail
                priceText={priceText}
              />
              <div className={styles.attributeList}>
                {listItems}
              </div>
            </div>
            <div className="col-12 col-md-2 text-right">
              {
                <div className={styles.saveWrap}>
                  <button className="btn btn-link">
                    <FavoritedIcon className={styles.hearIcon} />
                    <span>{t(`common:saveListing`)}</span>
                  </button>
                </div>
              }
            </div>
            <div className="col-12 col-md-3 text-right">
              {
                this.props.isShowButtonContact &&
                <FloatingContactButton
                  postContact={postContact}
                  postContactResult={postContactResult}
                  requestContact={requestContact}
                  onRequestContactChanged={onRequestContactChanged}
                />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FloatingHeader.propTypes = {
  t: PropTypes.func,
  address: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired,
  priceText: PropTypes.number,
  attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
  isShowButtonContact: PropTypes.bool,
  postContact: PropTypes.func,
  postContactResult: PropTypes.shape({
    statusCode: PropTypes.number,
    message: PropTypes.string,
  }),
  onRequestContactChanged: PropTypes.func,
  requestContact: PropTypes.object,
};

FloatingHeader.defaultProps = {
  t: null,
  priceText: 0,
  isShowButtonContact: false,
  postContact() {},
  postContactResult: null,
  onRequestContactChanged: null,
  requestContact: null,
};

export default translate(['propertyDetail', 'common'])(FloatingHeader);
