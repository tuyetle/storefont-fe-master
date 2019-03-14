import themes from '~/styles/themes';
import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  title: css({
    margin: '0',
  }),

  price: css({
    ...themes['font-montserrat-medium'],
    color: variables.$commonRed,
    fontSize: '1.25em',

    '@media (min-width: 768px)': {
      fontSize: '1.975em',
    },
  }),
};

