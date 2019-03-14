import variables from '~/styles/variables';
import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  latestNews: css({
    padding: '2em',
    ...themes['font-montserrat-medium'],
  }),
  title: css({
    marginBottom: '2em',
  }),
  primaryAction: css({
    boxShadow: `0.237em 0.369em 0.544em 0.081em ${variables.$newsLastestShadowColor}`,
    lineHeight: '2.45em',
    width: '12.563em',
    color: 'white',
    backgroundColor: variables.$viewAllbuttonColor,
    display: 'inline-block',
    letterSpacing: '0.069em',
    textAlign: 'center',
    '&:hover': {
      textDecoration: 'none',
      cursor: 'pointer',
      backgroundColor: variables.$viewAllbuttonHoverColor,
      color: 'white',
    },
  }),
  adsBanner: css({
    float: 'left',
    marginTop: '0.625em',
  }),
  banner300x600Wrap: css({
    '@media (min-width: 768px)': {
      marginBottom: '1.2em',
    },
  }),
  newsItems: css({
    padding: '0',
    '& h3': {
      textAlign: 'left',
      textTransform: 'uppercase',
      marginBottom: '2em',
    },
    '@media (min-width: 768px)': {
      width: 'calc(100% - 18.75em)',
      padding: '0 1.875em',
    },

  }),
  newTitle: css({
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: '1.125em',
    marginBottom: '0.5em',
    fontWeight: '700',
    color: variables.$landingPageTabTitleColor,
    '@media (min-width: 768px)': {
      textAlign: 'left',
      fontSize: '1.875em',
      marginBottom: '1em',
    },
  }),
  wraper: css({
    display: 'block',
    '@media (min-width: 768px)': {
      display: 'flex',
    },
  }),
  viewAll: css({
    display: 'block',
    '@media (min-width: 768px)': {
      textAlign: 'right',
    },
  }),
};
