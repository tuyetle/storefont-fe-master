import React from 'react';
import ADS from '~/config/ads';
import AdsHolder from '~/components/AdsHolder/AdsHolder';
import { css } from 'glamor';
import styles from './styles';

const LPMrBanner = () => (
  <div className={css(styles.mrBanner)}>
    <AdsHolder {...ADS.bannerType.landingPage.mr1} />
  </div>
);

export default LPMrBanner;
