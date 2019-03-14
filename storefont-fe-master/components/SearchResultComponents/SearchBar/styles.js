import variables from '~/styles/variables';
import themes from '~/styles/themes';
import { css } from 'glamor';

export default{
  searchBar: css({
    margin: '0.25em 1em',
    padding: '0.2em 0',
    boxShadow: variables.$boxShadoSearchBar,
    color: variables.$colorWelcome,
    fontSize: '0.9375em',
    ...themes['font-montserrat'],

    '@media (min-width: 768px)': {
      padding: '0.2em 1em',
    },
    '& .Select-placeholder': {
      fontSize: '0.8875em',
      fontStyle: 'italic',
      ...themes['font-montserrat'],
    },
    '& .Select': {
      '&:focus': {
        outline: 'none',
      },
      '& .Select-clear': {
        display: 'none',
      },
      '&.is-focused:not(.is-open)>.Select-control': {
        boxShadow: 'none',
        outline: 'none',
      },
    },
    '& .Select .Select-control': {
      marginLeft: '0',
      '@media (min-width: 768px)': {
        marginRight: '1em',
      },
    },
    '& .Select--multi .Select-value': {
      boxShadow: variables.$boxShadowTag,
      background: 'none',
      border: 'none',
      color: variables.$colorWelcome,
      borderRadius: '3.125em',
    },
    '& .Select-value-icon': {
      float: 'right',
      border: 'none',
    },
    '& .Select--multi .Select-value-icon': {
      padding: '0.1875em 0.3125em 0.1875em',
      border: 'none',
    },

  }),
  alignCenter: css({
    alignItems: 'center',
    margin: 'auto',
  }),
  saveSearch: css({
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    border: '0',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    margin: '1em',
    color: variables.$locationTextColor,
    fontSize: '0.75em',
    display: 'inline-block',

    '&:before': {
      marginRight: '.5em',
      fontFamily: 'FontAwesome',
      content: '\\f006',
      display: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  }),
  deleteSearch: css({
    backgroundColor: 'transparent',
    backgroundRepeat: 'no-repeat',
    border: '0',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    marginRight: '1em',
    padding: '0',
    color: variables.$locationTextColor,
    fontSize: '0.75em',
    display: 'inline-block',

    '&:before': {
      marginRight: '.5em',
      fontFamily: 'FontAwesome',
      content: '\\f006',
      display: 'none',
    },
    '&:focus': {
      outline: 'none',
    },
  }),
  success: css({
    border: '1px solid red',
    color: 'white',
    backgroundColor: 'red',
  }),
  filterGroup: css({
    float: 'right',
    textAlign: 'right',
    alignSelf: 'center',
  }),
  listDropdown: css({
    borderLeft: 'none',
    paddingLeft: '1.5em',
    height: '41px',
    lineHeight: '2.5em',
    display: 'inline-block',

    '@media (min-width: 768px)': {
      borderLeft: `1px solid ${variables.$borderdropdown}`,
    },
  }),
  filterArea: css({
    '& svg': {
      verticalAlign: 'middle',
      marginRight: '0',
      '@media (min-width: 768px)': {
        marginRight: '0.4em',
      },
    },
  }),
  groupSell: css({
    display: 'inline-block',
    color: variables.$colorWelcome,
    borderLeft: `1px solid ${variables.$borderdropdown}`,
    padding: '0 0.5em',
    height: '41px',
    lineHeight: '2.5em',
    '& .ant-radio-group-large .ant-radio-button-wrapper': {
      height: '29px',
      lineHeight: '26px',
      '&:before': {
        display: 'none',
      },
    },
    '& .ant-radio-button-wrapper': {
      color: 'black',
      border: '.125em solid transparent',
      textTransform: 'uppercase',
      boxShadow: 'none',
      outline: '0',
      borderRadius: '0',
      fontSize: '0.9375em',

      '&:hover': {
        color: variables.$colorWelcome,
        boxShadow: 'none',
      },

      '&:focus, &:active': {
        borderRadius: '0',
        color: variables.$colorWelcome,
        border: `.125em solid ${variables.$colorHambuger}`,
        boxShadow: 'none',
        outline: 'none',
      },

      '&.ant-radio-button-wrapper-checked': {
        borderRadius: '0',
        border: `.125em solid ${variables.$colorHambuger}`,
        color: variables.$colorWelcome,
        '&:hover': {
          boxShadow: 'none',
        },

        '&:first-child': {
          border: `.125em solid ${variables.$colorHambuger}`,
          borderRadius: '0',
        },
        '&:last-child': {
          border: `.125em solid ${variables.$colorHambuger}`,
          borderRadius: '0',
        },
      },
    },
  }),

  otherFilters: css({
  }),
  filters: css({
    position: 'fixed',
    top: '0',
    right: '0',
    left: '0',
    borderRadius: '0',
    width: '100vw',
    maxWidth: variables.$maxWidthFilter,
    overflow: 'hidden',
    margin: '0',
    backgroundColor: 'white',
    boxShadow: variables.$boxShadowFilter,
    border: `1px solid ${variables.$borderFilter}`,
    color: variables.$colorWelcome,
    padding: '1.5em',
    display: 'none',

    '.closedFilter &': {
      display: 'block',
      zIndex: '9',
      height: '100vh',
      maxHeight: '100vh',
      overflowY: 'scroll',
      overflowX: 'hidden',
      padding: '0',
    },

    '@media (min-width: 768px)': {
      position: 'fixed',
      width: '596px',
      right: '0',
      left: '-18em',
      display: 'block',
    },
  }),
  iconFilters: css({
    '@media (max-width: 767px)': {
      width: '23px',
      height: '20px',
      display: 'block',
      float: 'right',
    },
  }),
};
