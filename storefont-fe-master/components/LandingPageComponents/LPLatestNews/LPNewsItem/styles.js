// import themes from '~/stylthemes.css',
import variables from '~/styles/variables';
import { right } from 'glamor';

export default {
  newsItem: {
    marginBottom: '1em',
    '@media (min-width: 768px)': {
      display: 'inline-block',
      marginBottom: '2.75em',
      clear: 'both',
    },
  },
  title: {
    float: 'inherit',
    fontSize: '1.125em',
    textAlign: 'left',
    fontWeight: 'bolder',
    lineHeight: '1.35',

    '& a': {
      color: variables.$newsTitleColor,
      fontWeight: 'bold',
    },
  },
  description: {
    fontSize: '1em',
    maxHeight: '6em',
    marginBottom: '0',
    overflow: 'hidden',
    display: 'inline-block',
    color: variables.$newsShortDescColor,
  },
  image: {
    maxWidth: '100%',
    boxShadow: variables.$boxShadowLastedNew,
    '@media (min-width: 1024px)': {
      height: '13.25em',
    },
  },
  imageUrl: {
    marginBottom: '1.5em',
    '@media (min-width: 768px)': {
      width: '317px',
      height: 'auto',
      marginBottom: '1.5em',
    },
    '@media (min-width: 1024px)': {
      float: 'left',
    },
  },
  content: {
    overflow: 'hidden',
    textAlign: 'left',
    '@media (min-width: 768px)': {
      paddingLeft: '0',
    },
    '@media (min-width: 1024px)': {
      paddingLeft: '1.875em',
    },
  },
  content_p: {
    width: '100%',
    maxWidth: '100%',
  },
  viewDetail: {
    background: 'url(\'static/assets/img/right-arrow.png\') right center no-repeat',
    fontStyle: 'italic',
    fontSize: '1.125em',
    display: 'inline-block',
    paddingRight: '3em',
    fontWeight: 'normal',
    color: variables.$viewDetailLinkColor,
    float: 'right',
    marginTop: '1.7em',
    '&:hover': {
      color: variables.$viewDetailLinkColor,
    },
    '@media (min-width: 768px)': {
      float: 'none',
    },
  },
};
