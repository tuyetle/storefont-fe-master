import variables from '~/styles/variables';
import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  Dropdown: css({
    listStyle: 'none',
    padding: '0',
    '& .dropdown-menu': {
      minWidth: 'inherit',
    },
    '& .show .dropdown-menu': {
      display: 'block',
      borderRadius: '0',
      border: 'none',
      padding: '0',
      marginTop: '0.8em',
      backgroundColor: 'transparent',
    },
    '& a': {
      position: 'relative',
      display: 'inline-block',
      listStyle: 'none',
      padding: '0',
      wordBreak: 'break-all',
      width: '100%',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingRight: '1.875em',
      whiteSpace: 'nowrap',
    },
  }),
  buttonBox: css({
    '&.btn, &.btn-secondary:not([disabled]):not(.disabled):active': {
      background: 'none',
      border: 'none',
      textDecoration: 'none',
      textTransform: 'none',
      fontWeight: '300',
      cursor: 'pointer',
      outline: '0',
      ...themes['font-montserrat-light'],
      fontSize: '0.9375em',
      paddingRight: '1.375em',
      color: variables.$colorWelcome,

      '&:hover, &:focus, &:after, &:before, &:active': {
        background: 'none',
        color: 'inherit',
        border: 'none',
        outline: '0',
        boxShadow: 'none',
      },
      '& i': {
        marginLeft: '0.563em',
      },
      '.show &': {
        ...themes['font-montserrat-medium'],
      },
    },
  }),
  open: css({
    marginTop: '1em',
    '& .dropdown-item:active': {
      backgroundColor: 'inherit',
    },
  }),
  caretIcon: css({
    '&:after': {
      fontFamily: 'FontAwesome',
      content: '\\f107',
      padding: '0.5em',
      position: 'absolute',
      right: '0',
      top: '54%',
      transform: 'translateY(-50%)',
    },
  }),
};
