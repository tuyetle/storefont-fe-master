import { css } from 'glamor';
import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  sendAgain: css({
    ...themes['font-montserrat-semibold'],
    backgroundColor: 'white',
    border: 'none',
    color: variables.$postListingColor,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    padding: '0.188em',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    '&:disabled': {
      color: variables.$buttonDisabledColor,
    },
  }),
  count: css({
    color: variables.$buttonDisabledColor,
  }),
  notReceived: css({
    fontSize: '0.938em',
  }),
  tickIcon: css({
    display: 'block',
    margin: '0 auto',
    marginTop: '1.438em',
    marginBottom: '1.375em',
    '@media (min-width: 768px)': {
      marginTop: '1.625em',
      marginBottom: '2em',
    },
  }),
  forgotPasswordSuccess: css({
    ...themes['font-montserrat-semibold'],
    color: '#00a046',
    lineHeight: '1.73',
    fontSize: '0.813em',
    '@media (min-width: 768px)': {
      fontSize: '0.938em',
    },
    textAlign: 'center',
    marginBottom: '2.688em',
  }),
};
