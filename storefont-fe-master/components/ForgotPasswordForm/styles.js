import { css } from 'glamor';

export default {
  form: css({
    paddingTop: '3.313em',
    paddingBottom: '5.688em',
    margin: '0 auto',
    width: '90%',
    '@media (min-width: 768px)': {
      width: '70%',
    },
  }),
  backgroundImage: css({
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '@media (min-width: 768px)': {
      backgroundImage: 'url(static/assets/img/bg-registration.png)',
      display: 'flex',
    },
  }),
  contain: css({
    '@media (min-width: 768px)': {
      width: '38.513em',
      background: 'white',
      margin: 'auto',
    },
  }),
};
