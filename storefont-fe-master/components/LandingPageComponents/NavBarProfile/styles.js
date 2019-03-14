import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  wrapper: css({
    maxWidth: '12.5em',
    '& svg': {
      display: 'inline-block',
      verticalAlign: 'middle',
      width: '1em',
    },
    '& .show .dropdown-menu': {
      backgroundColor: 'white',
      boxShadow: variables.$boxShadowNavBarProfile,
    },
    '& .dropdown-item': {
      padding: '.2em 0.8em',
    },
    '& a': {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginLeft: '.6em',
      textDecoration: 'none',
      color: `${variables.$locationTextColor}`,
      '&:hover': {
        textDecoration: 'none',
        color: `${variables.$locationTextColor}`,
      },
    },
  }),
  item: css({
    '&:first-child': {
      marginTop: '1em',
    },
    '&:last-child': {
      marginBottom: '1em',
    },
  }),

  profileMobileList: css({
    '&.nav': {
      paddingTop: '2px',
      '& .nav-item': {
        width: '100%',
        padding: '0',
        '& svg': {
          display: 'inline-block',
          verticalAlign: 'middle',
          width: '1em',
          opacity: 0.5,
        },
        '& a': {
          display: 'inline-block',
          verticalAlign: 'middle',
          marginLeft: '.6em',
          textDecoration: 'none',
          color: `${variables.$locationTextColor}`,
          paddingLeft: '0',
          '&:hover': {
            textDecoration: 'none',
            color: `${variables.$locationTextColor}`,
          },
        },
      },
    },
  }),
};
