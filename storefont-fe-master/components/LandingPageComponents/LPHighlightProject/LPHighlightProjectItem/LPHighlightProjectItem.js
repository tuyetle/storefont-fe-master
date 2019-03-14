import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Link from 'next/link';
import { css } from 'glamor';
import styles from './styles';

const LPHighlightProjectItem = ({ t, listing }) => (
  <div className={css(styles.project)}>
    <Link href={listing.url}>
      <a className={css(styles.link)}>
        <div className="bgImg">
          <img className={css(styles.img)} src={listing.picture} alt={listing.title} />
        </div>
        <div className={css(styles.info)}>
          <div className={css(styles.title)}>
            {listing.title}
          </div>
          <div className={css(styles.address)}>
            {listing.address}
          </div>
          <div className={css(styles.price)}>
            { t('common:moneyFormat', { value: listing.price }) }
          </div>
        </div>
      </a>
    </Link>
  </div>
);

LPHighlightProjectItem.propTypes = {
  listing: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    picture: PropTypes.string,
    address: PropTypes.string,
    price: PropTypes.number,
    url: PropTypes.string,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(['landingPage'])(LPHighlightProjectItem);
