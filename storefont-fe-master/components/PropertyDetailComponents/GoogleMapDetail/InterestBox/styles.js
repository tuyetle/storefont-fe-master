import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  InterestBox: {
    width: '75vw',
    maxWidth: '1140px',
    background: 'white',
    borderRadius: '3rem',
    top: '2em',
    left: '16vw',
    position: 'absolute',
  },

  InterestBoxLine: css({
    ...themes['font-montserrat-light'],
    margin: '1em 0',
    flexWrap: 'unset',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  InterestBoxLineIcon: css({
    paddingRight: '0.5em',
    '& img': {
      width: '1.5em',
    },
  }),

  InterestBoxLineTitle: css({
    fontSize: '0.8em',
  }),

  InterestBoxLineNumber: css({
    color: 'red',
    textAlign: 'center',
    fontSize: '0.9em',
    fontWeight: 'bold',
  }),

};
