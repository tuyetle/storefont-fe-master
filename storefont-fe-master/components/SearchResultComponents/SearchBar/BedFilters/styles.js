import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  bedFilters: css({
    position: 'relative',
    fontSize: '0.8em',
    width: '25em',
    top: '0em',
    padding: '0 0 1.8em 0',
    background: 'white',
    textAlign: 'left',
    '@media (min-width: 768px)': {
      position: 'relative',
      fontSize: '0.8em',
      width: '25em',
      top: '0em',
      padding: '1em',
      background: 'white',
      boxShadow: variables.$boxShadowPrice,
      textAlign: 'auto',
    },
  }),
  item: css({
    margin: '0 2em 0 0',
    '& input[type=checkbox]': {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    '@media (min-width: 768px)': {
      margin: '0 1em',
      '& input[type=checkbox]:checked:before': {
        top: '-0.8em',
      },
    },
  }),
  textInfo: css({
    paddingLeft: '0.5em',
  }),
  item_input: css({
    marginLeft: '0',
  }),
  item_span: css({ paddingLeft: '0.5em', position: 'absolute' }),
};
