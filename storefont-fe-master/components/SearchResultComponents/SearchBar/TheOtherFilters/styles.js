import variables from '~/styles/variables';
import { css } from 'glamor';
import themes from '~/styles/themes';

export default {
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
  filter: css({
    padding: '1em',
    '&:nth-child(2n+0)': {
      borderLeft: `1px solid ${variables.$borderdropdown}`,
    },
  }),
  filterList: css({
    margin: '0',
    padding: '0',
    textAlign: 'left',
  }),
  filterListItem: css({
    width: '33%',
    lineHeight: '1em',
    display: 'inline-block',
    verticalAlign: 'middle',

    '& .form-check': {
      marginBottom: '0',
    },

    '@media (min-width: 768px)': {
      width: '50%',
      '& .form-check': {
        marginBottom: '.5rem',
      },
    },
  }),
  filterName: css({
    textAlign: 'left',
    fontSize: '1em',
    fontWeight: 'bold',
    marginBottom: '0.8em',
    '@media (min-width: 768px)': {
      marginBottom: '1.5em',
    },
  }),
  label: css({
    overflow: 'hidden',
    marginBottom: '0',
    '& input[type=checkbox]': {
      width: '1em',
      height: '1em',
      display: 'inline-block',
      verticalAlign: 'middle',
      borderColor: variables.$colorHambuger,
      '&:before': {
        top: '0',
        fontSize: '0.8em',
      },
    },
    '@media (min-width: 768px)': {
      marginBottom: '.5rem',
    },
  }),
  optionsName: css({
    paddingLeft: '0.5em',
    fontSize: '0.8125em',
    lineHeight: '1.65em',
    '@media (min-width: 768px)': {
      fontSize: '0.875em',
    },
  }),
  groupSell: css({
    display: 'inline-block',
    color: variables.$colorWelcome,
    borderLeft: 'none',
    padding: '0',
    height: '41px',
    lineHeight: '2.5em',
    float: 'left',
    marginBottom: '0.8em',
    '& .ant-radio-group-large .ant-radio-button-wrapper': {
      height: '29px',
      lineHeight: '26px',
      '&:before': {
        display: 'none',
      },
    },
    '& .ant-radio-button-wrapper': {
      color: 'black',
      border: '0.0625em solid transparent',
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
        border: `0.0625em solid ${variables.$colorHambuger}`,
        boxShadow: 'none',
        outline: 'none',
      },

      '&.ant-radio-button-wrapper-checked': {
        borderRadius: '0',
        border: `0.0625em solid ${variables.$colorHambuger}`,
        color: variables.$colorWelcome,
        '&:hover': {
          boxShadow: 'none',
        },

        '&:first-child': {
          border: `0.0625em solid ${variables.$colorHambuger}`,
          borderRadius: '0',
        },
        '&:last-child': {
          border: `0.0625em solid ${variables.$colorHambuger}`,
          borderRadius: '0',
        },
      },
    },
    '@media (min-width: 768px)': {
      float: 'none',
      borderLeft: `1px solid ${variables.$borderdropdown}`,
      padding: '0 0.5em',
      marginBottom: '0',
    },
  }),
  filtersControl: css({
    width: '100%',
    padding: '0.6em 0 0.3em',
    overflow: 'hidden',
  }),
  filtersName: css({
    ...themes['font-montserrat-semibold'],
    float: 'left',
  }),
  otherFilters: css({
    float: 'right',
  }),
  filtersControlWrap: css({
    boxShadow: variables.$boxShadowFilter,
  }),
  filtersControlContent: css({
    padding: '1em 0 0 0',
  }),
  categoryFilters: css({
    '&.nav': {
      '& .nav-item': {
        width: '100%',
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
    cursor: 'pointer',
    borderBottom: 'none',
    WebkitAppearance: 'none',
    padding: '0.5em 0 1em',
    border: '0',
    position: 'relative',
    textAlign: 'left',
    paddingBottom: '0',
    '&:nth-last-child()': {
      borderBottom: '0',
    },

    '&:active, &:hover, &:focus': {
      outline: 'none',
    },
    '&:after': {
      content: '""',
      position: 'absolute',
      top: '1em',
      right: '0',
      border: `solid ${variables.$listingItemTitleColor}`,
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

  categoryFiltersContent: css({
    '&.nav': {
      paddingLeft: '1em',
      marginBottom: '0.1em',
      borderBottom: `1px solid ${variables.$borderMenuLink}`,
    },
  }),
};
