import { css } from 'glamor';

export default {
  bg: css({
    position: 'absolute',
    zIndex: '-1',
    width: '100vw',
    height: '100%',
    top: '0',
  }),
  wrapperBgHeader: css({
    position: 'relative',
    '& img': {
      width: '100%',
      height: '10rem',
      zIndex: '0',
    },
  }),
  wrapperForm: css({
    backgroundColor: 'white',
    width: '50%',
    marginTop: '2%',
  }),
  logo: css({
    marginTop: '-1.5rem',
    '& img': {
      width: '5rem',
      height: '5rem',
      zIndex: '1',
    },
  }),
};
