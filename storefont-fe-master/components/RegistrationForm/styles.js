import { css } from 'glamor';

export default {
  wrapper: css({
    backgroundImage: 'url(static/assets/img/bg-registration.png)',
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    paddingTop: '1em',
  }),
  contain: css({
    '@media (min-width: 768px)': {
      width: '38.513em',
      background: 'white',
      margin: '0 auto',
    },
  }),
  header: css({
    position: 'relative',
    '& img': {
      width: '100%',
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
  backIcon: css({
    marginRight: '0.625em',
    verticalAlign: 'middle',
  }),
  circile: css({
    position: 'absolute',
    left: '42%',
    width: '4.625em',
    bottom: '-3.1em',
    padding: '0.938em 0.5em',
    backgroundColor: 'white',
    borderRadius: '50%',
    '@media (min-width: 768px)': {
      left: '45%',
    },
  }),

  wrapperRegister: css({
    margin: '1em 0',
    lineHeight: '2.25',
  }),
};
