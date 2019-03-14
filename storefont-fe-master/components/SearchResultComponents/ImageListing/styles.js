import { css } from 'glamor';

export default {
  wapper: css({
    position: 'relative',
    cursor: 'pointer',
    display: 'flex',
  }),
  maxWidth: css({
    maxWidth: '100%',
    height: '100%',
  }),
  top: css({
    position: 'absolute',
    background: 'url(/static/assets/img/top-badge.png) top left no-repeat',
    width: '5.500em',
    height: '5.563em',
    left: '-0.5em',
    top: '-0.5em',
    backgroundSize: '69%',
    '@media (min-width: 768px)': {
      backgroundSize: '100%',
    },
  }),
  express: css({
    position: 'absolute',
    background: 'url(/static/assets/img/express-badge.png) top left no-repeat',
    width: '11.188em',
    height: '2.125em',
    backgroundSize: '50%',
    left: '95%',
    top: '.75em',
    marginLeft: '-5.594em',
    '@media (min-width: 768px)': {
      left: '50%',
      backgroundSize: '100%',
    },
  }),
};
