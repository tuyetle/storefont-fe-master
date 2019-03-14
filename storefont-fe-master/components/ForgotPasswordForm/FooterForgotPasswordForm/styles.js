import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  footer: css({
    paddingBottom: '2em',
  }),
  backIcon: css({
    verticalAlign: 'middle',
  }),
  loginButton: css({
    background: 'none',
    color: variables.$locationTextColor,
    border: 'none',
    textDecoration: 'none',
    textTransform: 'uppercase',
    padding: '0 0.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: '0',
    fontSize: '0.813em',
    '@media(min-width: 768px)': {
      color: variables.$colorWelcome,
      fontSize: '0.938em',
    },
  }),
};
