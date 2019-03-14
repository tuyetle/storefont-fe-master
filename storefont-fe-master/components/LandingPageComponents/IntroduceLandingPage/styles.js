import variables from '~/styles/variables';
import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  postListingBg: css({
    backgroundImage: 'url(static/assets/img/introduce-mobile.jpg)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center top',
    paddingBottom: '36%',
    '@media (min-width: 768px)': {
      backgroundImage: 'url(static/assets/img/introduce.jpg)',
      paddingBottom: '5%',
    },
    '@media (min-width: 1600px)': {
      backgroundSize: 'contain',
      paddingBottom: '9%',
    },
    '@media (min-width: 1600px) and (max-width: 1920px)': {
      paddingBottom: '13%',
    },
  }),
  bannerTitle: css({
    color: 'white',
    fontSize: '1.3125em',
    fontWeight: 'normal',
    fontStyle: 'normal',
    fontStretch: 'normal',
    letterSpacing: 'normal',
    padding: '2.5em 5% 0.5em',
    lineHeight: '1.5em',

    '@media (min-width: 768px)': {
      fontSize: '2.125em',
      padding: '4em 0 1em',
      lineHeight: '1.25em',
      margin: '0 auto',
      maxWidth: variables.$titleHomeMaxWidth,
    },
  }),

  clear: {
    ...themes.clear,
  },
  postListingBtn: {
    float: 'right',
    padding: '0.5em',
    margin: '1em 6em',
    backgroundColor: 'transparent',
    border: '1px solid white',
    color: 'white',

    '&:hover': {
      cursor: 'pointer',
      backgroundColor: 'chocolate',
    },
  },
};
