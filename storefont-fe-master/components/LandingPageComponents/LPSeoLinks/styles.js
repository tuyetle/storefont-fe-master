import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  seo: css({
    backgroundColor: variables.$footerBgColor,
  }),
  seoLinks: css({
    padding: '1.5em 0',

    '@media (min-width: 768px)': {
      padding: '3em',
    },
  }),
  tab: css({
    '&.nav-tabs': {
      justifyContent: 'center',
      marginBottom: '3em',
      display: 'flex',
      borderBottom: 'none',

      '& .nav-item': {
        marginBottom: '0',
        flex: '0 0 16%',
        textAlign: 'center',
        textOverflow: 'ellipsis',
      },
      '& .nav-item .nav-link': {
        color: 'white',
        textTransform: 'uppercase',
        border: '0 none',
        cursor: 'pointer',
        padding: '0',
        fontWeight: '500',
      },
      '& .nav-item .nav-link.active, .nav-item .nav-link:hover': {
        backgroundColor: 'transparent',
        border: '0 none',
        color: 'white',
      },
      '& .nav-item .nav-link span': {
        display: 'none',
      },
      '& .nav-item .nav-link.active span': {
        display: 'block',
        width: '50%',
        height: '3px',
        backgroundColor: variables.$seoActiveTabColor,
        margin: '0 auto',
        marginTop: '.5em',
      },
    },
  }),
  tabContent: css({
    position: 'relative',
    minHeight: '16em',

    '& .active': {
      zIndex: '3',
    },

    '@media (min-width: 768px)': {
      marginTop: '2em',
    },

  }),
  link: css({
    color: 'white',
    fontWeight: 'normal',
    fontSize: '0.85em',
    textTransform: 'uppercase',
    marginBottom: '1em',
    display: 'inline-block',
    '&:hover': {
      color: 'white',
    },
  }),

  accordion: css({
    color: 'white',
    '&.nav': {
      '& .nav-item': {
        width: '100%',
        fontSize: '0.9375em',
        textTransform: 'uppercase',
        '& .nav-link': {
          padding: '1em 0',
          cursor: 'pointer',
        },
      },
    },
  }),

  buttonLink: css({
    width: '100%',
    outline: 'none',
    background: 'none',
    color: 'white',
    textTransform: 'uppercase',
    cursor: 'pointer',
    fontWeight: '500',
    textAlign: 'left',
    WebkitAppearance: 'none',
    padding: '1em 0',
    borderTop: '0',
    borderLeft: '0',
    borderRight: '0',
    borderBottom: `1px solid ${variables.$borderMenuLink}`,
    position: 'relative',
    '&:nth-last-child()': {
      borderBottom: '0',
    },

    '&:active, &:hover, &:focus': {
      color: 'white',
      outline: 'none',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '1em',
      right: '0',
      border: 'solid white',
      borderWidth: '0 2px 2px 0',
      display: 'inline-block',
      padding: '5px',
      cursor: 'pointer',
      transform: 'rotate(45deg)',
      WebkitTransform: 'rotate(45deg)',
    },
    '&.active': {
      borderBottom: '0',
      '&:after': {
        top: '1.4em',
        transform: 'rotate(-135deg)',
        WebkitTransform: 'rotate(-135deg)',
      },
    },

  }),

  accordionList: css({
    '&.nav': {
      paddingLeft: '1em',
      marginBottom: '0.1em',
      borderBottom: `1px solid ${variables.$borderMenuLink}`,
    },
  }),

};
