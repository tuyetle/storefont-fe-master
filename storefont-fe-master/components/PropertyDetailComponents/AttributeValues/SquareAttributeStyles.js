import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  attributeValue: css({
    display: 'block',
    ...themes['font-montserrat-medium'],
    fontSize: '1.25em',

    '@media(min-width: 768px)': {
      fontSize: '1.875em',
    },
  }),
};
