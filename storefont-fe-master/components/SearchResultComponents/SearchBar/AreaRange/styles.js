import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  areaRange: css({
    width: '34em',
    maxWidth: '598px',
    padding: '0 0 0.5em',
    top: '0em',
    right: '-11em',
    backgroundColor: 'white',

    '& .input-group': {
      width: '190px',
      height: '30px',
      border: `0.5px solid ${variables.$borderPrice}`,
      fontSize: '0.875em',
      position: 'relative',
      '& .form-group': {
        position: 'relative',
        width: '100%',
      },
      '& .form-control': {
        background: 'none',
        fontSize: '0.875em',
        border: '0',
        fontStyle: 'italic',
        position: 'absolute',
        width: '80%',
        left: '0',
        top: '0',
        lineHeight: '21px',
        '&:focus': {
          outline: 'none',
          boxShadow: 'none',
        },
      },
      '& .input-group-addon': {
        position: 'absolute',
        right: '0',
        background: 'none',
        border: '0',
        fontSize: '1em',
        lineHeight: '18px',
        color: variables.$bgLineMenu,
      },
    },

    '@media (min-width: 768px)': {
      position: 'absolute',
      width: '34em',
      maxWidth: '598px',
      padding: '1.5em 0 0.5em 1.2em',
      top: '0em',
      right: '-10.6em',
      backgroundColor: 'white',
      boxShadow: variables.$boxShadowPrice,
      border: `1px solid ${variables.$borderFilter}`,
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
