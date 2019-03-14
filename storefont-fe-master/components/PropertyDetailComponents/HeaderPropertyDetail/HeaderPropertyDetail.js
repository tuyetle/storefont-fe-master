import React from 'react';
import { translate } from 'react-i18next';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AddressPropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/AddressPropertyDetail/AddressPropertyDetail';
import TitlePropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/TitlePropertyDetail/TitlePropertyDetail';
import styles from './styles';

const HeaderPropertyDetail = ({
  t, title, address, transactionType, createdDate, expiredDate,
}) => (
  <div className={classNames('row', `${styles.wrapper}`)}>
    <div className="col-12">
      <TitlePropertyDetail
        title={title}
      />
    </div>
    <div className="col-12">
      <div className="row">
        <div className="col-12 col-md-9">
          <AddressPropertyDetail
            address={address}
            transactionType={transactionType}
          />
        </div>
        <div className="col-12 col-md-3 text-right">
          <ul className={styles.dateList}>
            <li>
              <span className={styles.dateLabel}>
                {t(`common:createdDate`)}:
              </span>
              <span className={styles.dateNumber}>
                {t(`common:dateShortFormat`, { value: createdDate })}
              </span>
            </li>
            <li>
              <span className={styles.dateLabel}>
                {t(`common:expiredDate`)}:
              </span>
              <span className={styles.dateNumber}>
                {t(`common:dateShortFormat`, { value: expiredDate })}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

HeaderPropertyDetail.propTypes = {
  t: PropTypes.func,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  transactionType: PropTypes.string.isRequired,
  createdDate: PropTypes.instanceOf(Date).isRequired,
  expiredDate: PropTypes.instanceOf(Date).isRequired,
};

HeaderPropertyDetail.defaultProps = {
  t: null,
};

export default translate(['propertyDetail', 'common'])(HeaderPropertyDetail);
