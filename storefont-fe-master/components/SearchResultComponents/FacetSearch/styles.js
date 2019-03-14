import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  sidebarNav: css({
    position: 'relative',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '90%',
    padding: '0',
    fontSize: '0.938em',
    border: `${variables.$borderFacetSearchBox}`,
    boxShadow: `${variables.$boxShadowFacetSearchBox}`,
    background: 'white',
  }),

  navItemHeader: css({
    textTransform: 'uppercase',
    display: 'block',
    width: '100%',
    padding: '0.38em 1em',
    borderTop: `${variables.$borderFacetSearchNavItem}`,
    borderBottom: `${variables.$borderFacetSearchNavItem}`,
    fontWeight: 'bold',
    fontSize: '1rem',
    '&:first-child': {
      borderTop: 'none',
    },
  }),

  navItem: css({
    display: 'block',
    paddingTop: '0.4em',
    paddingLeft: '1em',
    color: `${variables.$colorFacetSearchNavItem}`,
  }),

  navItemButton: css({
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    '&:focus': {
      outline: 'none',
    },
  }),

  navDropDownToogle: css({
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    padding: '0.35em 0 0.35em 0',
    '&:focus': {
      outline: 'none',
    },

    '&:before': {
      fontFamily: 'FontAwesome',
      content: '\\f106',
      position: 'absolute',
      right: '0.5em',
      display: 'block',
      width: '0.875em',
      height: '1rem',
      padding: 0,
      fontSize: '1.25em',
      lineHeight: '0.65625em',
      textAlign: 'center',
      transition: '.3s',
      transform: 'rotate(-180deg)',
      opacity: 0.5,
    },
  }),

  navDropDownToogleOpen: css({
    fontWeight: 'bold',
    '&:before': {
      transform: 'rotate(0)',
      opacity: 1,
    },
  }),

  dropDownItems: css({
    maxHeight: 0,
    padding: 0,
    margin: 0,
    overflowY: 'hidden',
    transition: 'max-height .3s ease-in-out',
  }),

  dropDownItemsOpen: css({
    maxHeight: '1000px',
  }),
};
