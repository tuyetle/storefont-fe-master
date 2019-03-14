import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  priceRange: css({
    width: '34em',
    maxWidth: '598px',
    top: '0em',
    right: '-28em',
    padding: '0 0 1.5em',
    backgroundColor: 'white',

    '@media (min-width: 768px)': {
      position: 'absolute',
      width: '34em',
      maxWidth: '598px',
      top: '0em',
      right: '-29em',
      padding: '1.5em 0 0.5em 1.2em',
      backgroundColor: 'white',
      boxShadow: variables.$boxShadowPrice,
      border: `1px solid ${variables.$borderFilter}`,
    },

    '&div': {
      paddingRight: '0',
      paddingLeft: '0',
    },
    '& .input-group': {
      width: '190px',
      height: '30px',
      border: `0.5px solid ${variables.$borderPrice}`,
      '& .form-control': {
        background: 'none',
        fontSize: '0.875em',
        border: '0',
        fontStyle: 'italic',
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
        },
      },
      '& .input-group-addon': {
        textTransform: 'uppercase',
        background: 'none',
        border: '0',
        fontSize: '0.8em',
        color: variables.$bgLineMenu,
      },
    },
  }),
  paddingLeft: css({
    verticalAlign: 'middle',
    paddingLeft: '1em',
    marginLeft: '0',
    marginTop: '1em',
    '@media (min-width: 768px)': {
      marginLeft: '-2em',
      marginTop: '0',
    },
  }),
  priceLabel: css({
    float: 'left',
    marginRight: '0.8em',
    fontSize: '0.875em',
    color: variables.$colorWelcome,
    marginTop: '-2.5px',
    width: '2.5em',
    textAlign: 'left',
    '@media (min-width: 768px)': {
      width: 'auto',
      textAlign: 'auto',
    },
  }),
  error: css({
    textAlign: 'left',
    clear: 'both',
    lineHeight: '1.5em',
    color: `${variables.$errorColor}`,
    maxWidth: '21.563em',
  }),
};
