import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  wrapper: css({
    width: '100%',
    display: 'inline',
    paddingBottom: '0.3em',
  }),
  item: css({
    display: 'block',
    width: '100%',
    padding: '0.625em 0',

    '&:last-child': {
      width: 'auto',
    },
    '&:first-child': {
      paddingLeft: '0',
    },
    '& a': {
      color: `${variables.$locationTextColor}`,
      textDecoration: 'none',
      overflow: 'hidden',
      border: 'none',
      background: 'none',
      margin: '0',
      padding: '0',
      outline: 'none',
      '&.active, &:hover': {
        borderBottom: '2px solid red',
        paddingBottom: '0.3em',
        textDecoration: 'none',
        color: 'black',
      },
    },

    '@media (min-width: 768px)': {
      padding: '0 1em 0.3em 1em',
      display: 'inline',
    },
  }),

};
