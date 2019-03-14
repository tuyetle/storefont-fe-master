import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AdsHolder from '~/components/AdsHolder/AdsHolder';
import ADS from '~/config/ads';
import { NEWS_URL } from '~/config/uri';
import { translate } from 'react-i18next';

import styles from './styles';
import LPNewsItem from './LPNewsItem/LPNewsItem';

const LPLatestNews = (props) => {
  const newsClassNames = classNames(`container ${styles.latestNews}`);
  const { t } = props;

  return (
    <section className={classNames(newsClassNames, 'text-center')}>
      <div className={classNames(`${styles.title}`, 'justify-content-end', 'row')}>
        <div className="col col-sm-12 d-sm-none">
          <h3 className={`${styles.newTitle}`}>{t('common:theLatestNews')}</h3>
        </div>
      </div>
      <div className={classNames(`${styles.wraper}`)}>
        <div className={classNames('d-none d-md-block', `${styles.adsBanner}`)}>
          <div className={`${styles.banner300x600Wrap}`}>
            <AdsHolder {...ADS.bannerType.landingPage.latestNews} />
          </div>
          <AdsHolder {...ADS.bannerType.landingPage.latestNews2} />
        </div>
        <div className={classNames(`${styles.newsItems}`)}>
          <div className="d-none d-md-block">
            <h3 className={`${styles.newTitle}`}>{t('common:theLatestNews')}</h3>
          </div>
          {props.news.map(item => (<LPNewsItem key={item.id} news={item} t={props.t} />))}
        </div>
      </div>
      <div className={classNames(`${styles.viewAll}`)}>
        <a
          href={NEWS_URL}
          className={classNames(`${styles.primaryAction}`)}
        >
          {t('common:viewAll')}
        </a>
      </div>
    </section>
  );
};

LPLatestNews.propTypes = {
  news: PropTypes.array.isRequired,
  t: PropTypes.func.isRequired,
};

export default translate(['common'])(LPLatestNews);
