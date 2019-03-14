import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  addressTransaction: css({
    display: 'block',
  }),

  label: css({
    marginLeft: '0',
    marginRight: '1em',
    color: variables.$listingItemTitleColor,
    fontSize: '0.6875em',

    '@media(min-width: 768px)': {
      fontSize: '1.125em',
    },

  }),

  transactionLabel: css({
    fontSize: '0.5625em',
    textTransform: 'uppercase',
    border: `1px solid ${variables.$locationTextColor}`,
    padding: '0.3125em 0.5625em 0.2125em',

    '@media(min-width: 768px)': {
      fontSize: '0.9375em',
    },
  }),

  iconLocation: css({
    width: '0.6em',
    height: '0.7em',
    display: 'inline-block',
    verticalAlign: 'middle',
    marginRight: '0.2em',


    '@media(min-width: 768px)': {
      width: '1.2em',
      height: '1.5em',
      marginRight: '0.4em',
      verticalAlign: 'top',
    },
  }),

};

