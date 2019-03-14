import themes from '~/styles/themes';
import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  floatingHeaderSticky: css({
    zIndex: 12,
    backgroundColor: 'white',
    boxShadow: `${variables.$boxShadowHeader}`,

    transition: 'all .5s ease-out',
    willChange: 'top',

    '> div': {
      display: 'block',
      background: variables.$white,
      position: 'relative',
    },
  }),

  contentPropertyDetail: css({
    paddingTop: '1.5em',

  }),

  showDesktop: css({
    display: 'none',

    '@media(min-width: 768px)': {
      display: 'block',
    },
  }),

  showMobile: css({
    display: 'block',

    '@media(min-width: 768px)': {
      display: 'none',
    },
  }),

  heading: css({
    ...themes['font-montserrat-medium'],
    fontSize: '1.0625em',
    lineHeight: '1.18',
    textTransform: 'uppercase',

    '@media(min-width: 768px)': {
      fontSize: '1.25em',
      lineHeight: '2',
    },

  }),

  floatingHeader: css({
    display: 'none',
  }),

  buttonContactStickyWrap: css({
    marginTop: '-111px',
    marginLeft: '0.8em',

    '& .buttonContactSticky': {
      zIndex: 12,
      backgroundColor: 'transparent',

      '> div': {
        display: 'block',
      },
    },
  }),

  buttonContact: css({
    display: 'none',
  }),

  contactFormContainer: css({
    width: variables.$widthContactForm,
    float: 'right',
  }),

  imageCarouselContainer: css({
    overflow: 'hidden',
  }),

  wrapperPropertyDetail: css({
    boxShadow: variables.$boxShadowTopFloating,
  }),

  imageCarousel: css({
  }),

  noPadding: css({
    padding: '0',
  }),

  AnchorListPropertyDetail: css({
    paddingTop: '2em',
    paddingBottom: '0.2em',
    borderBottom: `1px solid ${variables.$borderAnchor}`,

    '& a': {
      ...themes['font-montserrat-light'],
    },
  }),
};

