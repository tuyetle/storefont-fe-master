import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  attributeValue: css({
    display: 'block',
    fontSize: '1.25em',

    '@media(min-width: 768px)': {
      fontSize: '1.875em',
    },
  }),

  attributeName: css({
    display: 'inline-block',
    opacity: '0.8',
    fontSize: '0.6875em',

    '@media(min-width: 768px)': {
      fontSize: '0.9375em',
    },
  }),

  icon: css({
    textAlign: 'right',
    '& label': {
      marginTop: '0.75em',
    },
  }),

  value: css({
    paddingLeft: '.25em',
  }),

  attributes: css({
    padding: '0.5em 0 0.3em 0em',
    marginBottom: '2em',
    border: `1px solid ${variables.$bgLineMenu}`,
    lineHeight: '1.25em',

    '@media(min-width: 768px)': {
      padding: '1em 0 0.6em 0em',
      lineHeight: 'inherit',
    },
  }),

  inline: css({
    display: 'inline-block',
    paddingRight: '0.3em',
    color: variables.$colorUtilityDisplay,

    '& label': {
      opacity: 1,

      '& span': {
        boxShadow: 'none',
      },
    },
  }),

  widthIcon: css({
    '& span': {
      width: '1.2em',
      height: '1.2em',
      lineHeight: '1.2em',
      verticalAlign: 'middle',
      display: 'inline-block',
      marginRight: '0.8em',

      '&:nth-child(2)': {
        display: 'none',
      },
    },
  }),

  iconVAlign: css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(20%)',
  }),

  pricePropertyWrapper: css({
    '& .priceLabel': {
      marginTop: '0.8em',
      textTransform: 'uppercase',
    },
  }),
};

