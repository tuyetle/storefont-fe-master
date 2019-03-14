import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  wrapper: css({
    marginTop: '1em',
    marginBottom: '1em',
  }),

  label: css({
    marginLeft: '0.5em',
    marginRight: '1em',
    color: variables.$listingItemTitleColor,
    fontSize: '1.125em',
  }),

  transactionLabel: css({
    fontSize: '0.9375em',
    textTransform: 'uppercase',
    border: `1px solid ${variables.$locationTextColor}`,
    padding: '0.3125em 0.5625em 0.2125em',
  }),

  dateList: css({
    listStyle: 'none',
    margin: '0',
    padding: '0',
    textAlign: 'left',

    '& li': {
      fontSize: '0.6875em',
      color: variables.$locationTextColor,
      lineHeight: '0.91',
      display: 'inline-block',


      '&:first-child': {
        borderRight: `1px solid ${variables.$colorBorderDate}`,
        paddingRight: '0.75em',
        marginRight: '0.75em',
      },
    },

    '@media(min-width: 768px)': {
      marginTop: '-0.5em',
      textAlign: 'right',

      '& li': {
        display: 'block',
        fontSize: '0.8125em',
        lineHeight: '1.54',

        '&:first-child': {
          borderRight: 'none',
          paddingRight: '0',
          marginRight: '0',
        },
      },
    },
  }),

  dateLabel: css({
    marginRight: '0.5em',
  }),
};

