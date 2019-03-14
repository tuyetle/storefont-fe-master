import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate } from 'react-i18next';

import SearchArea from '~/components/LandingPageComponents/SearchArea/SearchArea';
import { css } from 'glamor';
import styles from './styles';

const IntroduceLandingPage = ({
  keyword, suggestions, getSuggestionHandler,
  selectSuggetionHandler, selectSuggetionTypeHandler, searchHandler, t,
}) => (
  <div className={`${styles.postListingBg}`}>
    <h1 className={classNames(`${styles.bannerTitle}`, 'text-center')}>{t('welcome')}</h1>
    <SearchArea
      keyword={keyword}
      suggestions={suggestions}
      getSuggestionHandler={getSuggestionHandler}
      selectSuggetionHandler={selectSuggetionHandler}
      selectSuggetionTypeHandler={selectSuggetionTypeHandler}
      searchHandler={searchHandler}
    />
    <div className={css(styles.clear)} />
  </div>
);

IntroduceLandingPage.propTypes = {
  keyword: PropTypes.string,
  suggestions: PropTypes.array,
  getSuggestionHandler: PropTypes.func.isRequired,
  selectSuggetionHandler: PropTypes.func.isRequired,
  selectSuggetionTypeHandler: PropTypes.func.isRequired,
  searchHandler: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

IntroduceLandingPage.defaultProps = {
  keyword: '',
  suggestions: [],
};

export default translate(['landingPage', 'common'])(IntroduceLandingPage);
