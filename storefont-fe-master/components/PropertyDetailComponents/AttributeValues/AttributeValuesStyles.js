import { css } from 'glamor';
import themes from '~/styles/themes';

export default {
  attributes: css({
    paddingTop: '2em',
  }),

  heading: css({
    ...themes['font-montserrat-medium'],
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: '1.25em',
    marginBottom: '0.8em',
  }),
};
