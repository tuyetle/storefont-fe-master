import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import ADS from '~/config/ads';
import AdType from '~/const/AdType';
import loadScript from '~/services/loadScript';
import styles from './styles';

class AdsHolder extends Component {
  componentDidMount() {
    loadScript.load(ADS.reviveSupportedScript);
  }

  render() {
    const { zoneId, reviveId, bannerType } = this.props;

    return (
      <div className={css(styles.adsWrapper)}>
        <ins
          className={css(styles.ads, bannerType ? styles[bannerType] : null)}
          data-revive-zoneid={zoneId}
          data-revive-id={reviveId}
        />
      </div>
    );
  }
}

AdsHolder.propTypes = {
  zoneId: PropTypes.string.isRequired,
  reviveId: PropTypes.string.isRequired,
  bannerType: PropTypes.oneOf([
    AdType.banner728x90,
    AdType.banner300x600,
    AdType.banner300x250,
  ]).isRequired,
};

export default AdsHolder;
