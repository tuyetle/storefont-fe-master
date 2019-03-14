import { css } from 'glamor';

export default {
  mrBanner: css({
    paddingTop: '1.5em',
    '& ins': {
      margin: '0 auto',
    },

    '@media (min-width: 768px)': {
      paddingTop: '1.5em',
    },
  }),
};
