import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  headerContainer: css({
    '& .navbar': {
      '@media(min-width: 768px)': {
        padding: '.5rem 0',
      },
    },
  }),

  logo: css({
    '&.navbar-brand': {
      '@media(min-width: 768px)': {
        marginRight: '3em',
      },
    },
  }),
  authButton: css({
    background: 'none',
    color: variables.$locationTextColor,
    border: 'none',
    textDecoration: 'none',
    textTransform: 'none',
    padding: '0 0.2em',
    fontWeight: 'bold',
    cursor: 'pointer',
    outline: '0',

    '@media(min-width: 768px)': {
      color: variables.$colorWelcome,
      margin: '0 0.5em',
    },
  }),
  registerLink: css({
    color: variables.$locationTextColor,
    fontWeight: 'bold',
    '&:hover': {
      textDecoration: 'none',
      color: variables.$locationTextColor,
    },
  }),
  btnPostListing: css({
    cursor: 'pointer',
    display: 'inline-block',
    padding: '.688em 0.938em',
    fontWeight: '300',
    margin: '1em 0',
    border: `1px solid ${variables.$postListingColor}`,
    color: variables.$postListingColor,
    textTransform: 'uppercase',

    '&:hover': {
      textDecoration: 'none',
      color: variables.$postListingColor,
    },

    '@media(min-width: 768px)': {
      margin: '1em 0 0 1em',
      display: 'block',
    },

    '@media(min-width: 1200px)': {
      margin: '0 0 0 2em',
      display: 'inline',
    },
  }),

  navbarToggler: css({
    '&.navbar-toggler': {
      position: 'absolute',
      top: '1em',
      right: '10px',
      border: 'none',
      outline: 'none',
      cursor: 'pointer',
      margin: '0!important',
      width: '1.5em',
      height: '1.5em',
      color: variables.$colorHambuger,

      '&.showHambuger': {
        right: '30px',
        top: '0.75em',
        zIndex: '99',
        position: 'fixed',

        '& span': {
          opacity: '1',
          transform: 'rotate(45deg) translate(-1px, -17px)',
          background: variables.$colorHambuger,

          '&:nth-last-child(3)': {
            opacity: '0',
            transform: 'rotate(0deg) scale(0.2, 0.2)',
          },
          '&:nth-last-child(2)': {
            transform: 'rotate(-45deg) translate(1px, 16px)',
          },
        },
      },
    },
    '& .navbar-toggler-icon': {
      background: 'none',
      width: 'auto',
      height: 'auto',
    },

    '& span': {
      display: 'block',
      width: '26px',
      height: '4px',
      marginBottom: '5px',
      position: 'relative',
      borderRadius: '3px',
      zIndex: '1',
      transformOrigin: '4px 0px',
      transition: 'transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)',
      background: variables.$colorHambuger,
      color: variables.$colorHambuger,

      '&:first-child': {
        transformOrigin: '0% 0%',
      },

      '&:nth-last-child(2)': {
        transformOrigin: '0% 100%',
      },
    },
    '&:focus': {
      outline: 'none',
    },
  }),

  navBarWrapper: css({
    '&.navbar': {
      '@media (max-width: 767px)': {
        padding: '10px 0 0 0',
        position: 'relative',
      },
    },
  }),

  anchors: css({
    margin: '0',
    padding: '0',
    '&.nav': {
      alignItems: 'center',
    },

    '@media(max-width: 767px)': {
      borderBottom: `1px solid ${variables.$bgLineMenu}`,
      paddingBottom: '20px',
      '& .nav-item': css({
        fontSize: '1em',
        textTransform: 'uppercase',
        cursor: 'pointer',
      }),
    },

    '@media(mmin-width: 768px)': {
      alignSelf: 'center',
    },
  }),

  navLogin: css({
    '&.nav': {
      '@media(max-width: 768px)': {
        padding: '1em 0 1.5em 0',
        margin: '0',
        '& .nav-item': {
          display: 'block',
          width: '100%',
          paddingTop: '1em',
        },
      },
    },
  }),
  avatar: css({
    marginLeft: '1em',
  }),
  navLogined: css({
    '&.nav': {
      '@media(max-width: 767px)': {
        paddingTop: '1em',
        '& .nav-item': {
          width: '85%',
        },
      },
    },
  }),

  avartarInfo: {
    padding: '0 0 0 1em',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    width: '80%',
    display: 'inline-block',
    verticalAlign: 'middle',
  },

  showOpacityMenu: css({
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '100%',
    zIndex: '9',
    background: 'black',
    opacity: '0.5',
    transition: 'opacity .25s cubic-bezier(.26,1.04,.58,1)',
    WebkitTapHighlightColor: 'transparent',
    '.show &': {
      left: '0',
      opacity: '0.5',
    },
  }),

  showNavMenu: css({
    position: 'fixed',
    top: '0',
    right: '0',
    bottom: '0',
    left: '16%',
    padding: '2.8125em 0 1.25em',
    MsFlexPositive: '1',
    flexGrow: '1',
    zIndex: '99',
    background: '#fff',
    transform: 'translateX(100%)',
    WebkitTapHighlightColor: 'transparent',
    transition: 'transform .25s cubic-bezier(.26,1.04,.58,1)',
    '.show &': {
      display: 'block',
      zIndex: '98',
      color: '#a9afb6',
      transform: 'translateX(0)',
      padding: '2.8em 1em 1.5em 1.5em',
      overflowY: 'scroll',
      overflowX: 'hidden',
    },
  }),
};
