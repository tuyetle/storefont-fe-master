import themes from '~/styles/themes';
import variables from '~/styles/variables';

import { css } from 'glamor';

export default {
  section: css({
    padding: '2em 0',

    '& .container': {
      '@media (max-width: 767px)': {
        padding: '0',
      },
    },
  }),

  title: css({
    ...themes['font-montserrat-medium'],
    color: variables.$landingPageTabTitleColor,
    fontSize: '1.5em',
    textTransform: 'uppercase',

    '@media (min-width: 768px)': {
      fontSize: '2em',
    },
  }),
};
