import { css } from 'glamor';

export default {
  header: css({
    position: 'relative',
  }),
  headerImg: css({
    width: '100%',
  }),
  circile: css({
    position: 'absolute',
    left: '42%',
    textAlign: 'center',
    width: '4.625em',
    bottom: '-3.1em',
    padding: '0.938em 0.5em',
    backgroundColor: 'white',
    borderRadius: '50%',
    '@media (min-width: 768px)': {
      left: '45%',
    },
  }),
  back: css({
    position: 'absolute',
    textTransform: 'uppercase',
    fontSize: '0.813em',
    fontWeight: 'bold',
    top: '1.1em',
    right: '0.875em',
    '& a': {
      color: 'white',
      '&:hover': {
        color: 'white',
        textDecoration: 'none',
      },
    },
    '@media (min-width: 768px)': {
      display: 'inherit',
      left: '0.875em',
    },
  }),
};
