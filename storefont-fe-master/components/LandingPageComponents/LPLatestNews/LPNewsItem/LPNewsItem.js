import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import styles from './styles';

const LPNewsItem = (props) => {
  const { news } = props;

  return (
    <div className={css(styles.newsItem)}>
      <div className={css(styles.imageUrl)}>
        <a href={news.url} title={news.title}>
          <img className={css(styles.image)} src={news.imageUrl} alt="" />
        </a>
      </div>
      <div className={css(styles.content)}>
        <h4 className={css(styles.title)}>
          <a href={news.url} title={news.title}>
            {news.title}
          </a>
        </h4>
        <p className={css(styles.description)}>
          {news.shortDescription}
        </p>
        <a href={news.url} title={news.title} className={css(styles.viewDetail)}>
          {props.t('common:view')}
        </a>
      </div>
    </div>
  );
};

LPNewsItem.propTypes = {
  news: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  t: PropTypes.func.isRequired,
};

export default LPNewsItem;
