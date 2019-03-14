import { css } from 'glamor';

export default {
  markerIcon: css({
    '& img': {
      width: '1.5rem',
    },
    '@media(min-width: 768px)': {
      '& img': {
        width: '2rem',
      },
    },
  }),
};
