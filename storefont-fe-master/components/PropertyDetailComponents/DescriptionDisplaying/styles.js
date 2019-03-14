import { css } from 'glamor';
import variables from '~/styles/variables';
import themes from '~/styles/themes';

export default {
  description: css({
    marginBottom: '2em',
    paddingTop: '2.4em',

    '@media(min-width: 768px)': {
      paddingTop: '2em',
    },
  }),

  heading: css({
    textAlign: 'left',
    textTransform: 'uppercase',
    fontSize: '1.25em',
  }),

  content: css({
    color: variables.$colorSite,
    position: 'relative',
    whiteSpace: 'pre-line',
    fontSize: '0.9375em',
  }),

  anchorClass: css({
    ...themes['font-montserrat-light'],
    color: `${variables.$colorSeeMore}`,
    textDecoration: 'underline',
    fontStyle: 'italic',
  }),

  showLess: css({
    marginTop: '0.5em',
  }),

  overlay: css({
    position: 'absolute',
    bottom: '-2.25em',
    left: '0',
    width: '100%',
    paddingTop: '4em',
    /* "transparent" only works here because == rgba(0,0,0,0) */
    // backgroundImage: `linear-gradient(to bottom, transparent, ${variables.$white})`,
  }),
};

