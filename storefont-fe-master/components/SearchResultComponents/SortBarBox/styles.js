import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  contain: css({
    display: 'inline-block',
    color: variables.$colorFacetSearchNavItem,
    fontSize: '0.750em',
    width: '1.6875em',
    height: '1.25em',
    border: 'none',
    paddingTop: '0.1em',
    verticalAlign: 'middle',
    marginRight: '1.25em',
    marginTop: '1em',

    '& a': {
      paddingLeft: '1em',
      '@media (max-width: 767px)': {
        display: 'inline-block',
        width: '100%',
        height: '1.75em',
        backgroundImage: `url('./static/assets/img/utilityIcons/ic-sort.svg')`,
        backgroundRepeat: 'no-repeat',
        paddingLeft: '1em',
        textIndent: '-100em',
        marginTop: '-0.2em',
      },
    },

    '@media (min-width: 768px)': {
      width: '14.7em',
      height: '1.938em',
      border: `solid 0.5px ${variables.$colorFacetSearchNavItem}`,
      background: 'none',
      verticalAlign: 'none',
      marginRight: '0',
      marginTop: '0',
    },

  }),
  sortBox: css({
    position: 'relative',
    top: '-0.5em',
    paddingTop: '0.3em',
    paddingBottom: '0.3em',
    width: '14.7em',
    fontSize: '0.750em',
    color: variables.$colorFacetSearchNavItem,
    backgroundColor: 'white',
    boxShadow: variables.$boxShadowListView,
    '& button': {
      paddingLeft: '0.813em',
      '&:active': {
        color: variables.$colorFacetSearchNavItem,
      },
    },
  }),
};
