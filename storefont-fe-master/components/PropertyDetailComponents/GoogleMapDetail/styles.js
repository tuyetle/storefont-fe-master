import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  googleMapDetail: css({
    position: 'relative',
    width: '100%',
    height: '11.75em',
    boxShadow: variables.$boxShadowGoogleMap,

    '@media(min-width: 768px)': {
      height: '35em',
      boxShadow: 'none',
    },
  }),
};
