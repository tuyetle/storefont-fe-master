import { css } from 'glamor';

export default {
  wrapper: css({
    padding: '1.5em 0 2.5em',
  }),
  utilityItem: css({
    width: '33%',
    marginRight: '0',
    marginBottom: '1em',

    '@media(min-width: 768px)': {
      width: 'auto',
      marginRight: '3em',
      marginBottom: '0',
    },
  }),

  iconCenter: css({
    margin: '0 auto',
  }),
};

