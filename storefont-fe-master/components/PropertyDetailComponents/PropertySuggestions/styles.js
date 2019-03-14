import { css } from 'glamor';
import themes from '~/styles/themes';

export default {
  property: css({

  }),

  suggestions: css({
    margin: '1.5em 0 1em',
    overflow: 'hidden',

    '& .slick-arrow': {
      position: 'absolute',
      top: '50%',
      width: '4.625em',
      height: '4.625em',
      overflow: 'hidden',
      marginTop: '-2.7em',
      outline: 'none',
      cursor: 'pointer',
    },
    '& .slick-prev': {
      left: '-1.25em',
      zIndex: 2,
      background: 'transparent url(/static/assets/img/prev-arrow.png) center center no-repeat',
      border: '0 none',
      textIndent: '-1000em',
    },
    '& .slick-next': {
      right: '-1.25em',
      background: 'transparent url(/static/assets/img/arrow.png) center center no-repeat',
      border: '0 none',
      textIndent: '-1000em',
    },

    '@media(min-width: 768px)': {
      margin: '3em 0 0.5em',
    },
  }),

  heading: css({
    ...themes['font-montserrat-medium'],
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: '1.0625em',
    marginBottom: '1.25em',

    '@media(min-width: 768px)': {
      fontSize: '1.25em',
    },
  }),
};
