import variables from '~/styles/variables';
import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  container: css({
    position: 'relative',
    display: 'flex',
    width: '90%',
    margin: '0 auto',

    '@media (min-width: 1024px)': {
      maxWidth: variables.$searchBoxWidth,
    },

  }),
  input: css({
    ...themes['font-montserrat-medium'],
    width: variables.$searchBoxWidth,
    maxWidth: variables.$searchBoxMaxWidth,
    margin: '0 auto',
    padding: '0.85em 3.5em 0.85em 1em',
    fontSize: '1em',
    border: 'none',
    color: variables.$colorHambuger,
    outline: 'none',
    position: 'relative',
    backgroundImage: 'url(static/assets/img/icon-search.png)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 0.625em) 50%',
    backgroundColor: 'white',
    fontStyle: 'italic',
    '@media (max-width: 767px)': {
      textOverflow: 'ellipsis',
    },

    '@media (min-width: 1024px)': {
      fontSize: '1.1875em',
      padding: '0.9em 3.5em 0.9em 1em',
    },
  }),
  focus: css({
    border: '0.1em solid #aaa',
  }),
  inputOpen: css({
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  }),
  suggestionsContainer: css({
    opacity: '0',
    transitionProperty: 'opacity, visibility',
    transitionDuration: '1s, 0s',
    transitionDelay: '0s, 0.5s',
  }),
  suggestionsContainerOpen: css({
    maxWidth: variables.$searchBoxMaxWidth,
    position: 'absolute',
    display: 'block',
    backgroundColor: 'white',
    fontFamily: 'Helvetica, sans-serif',
    fontWeight: 'inherit',
    fontSize: '1em',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    zIndex: '2',
    left: '50%',
    transform: 'translateX(-50%)',
    marginTop: '3.1em',
    width: '100%',
    overflowY: 'auto',
    maxHeight: '48vh',
    transitionProperty: 'visibility, opacity',
    transitionDuration: '0s, 1s',
    opacity: '1',
    border: 'none',
    paddingTop: '1em',
    paddingBottom: '1.5em',
    boxShadow: variables.$boxShadowSearch,

    '@media (min-width: 1024px)': {
      marginTop: '3.886875em',
    },
  }),
  suggestionsList: css({
    margin: '0',
    padding: '0',
    listStyleType: 'none',
  }),
  suggestion: css({
    cursor: 'pointer',
    padding: '0.25em 0.25em',

    '@media (min-width: 768px)': {
      padding: '0.25em 1em',
    },

  }),
  suggestionHighlighted: css({
    backgroundColor: variables.$searchSuggestionHightLighted,
  }),
  sectionContainerFirst: css({
    borderTop: '0',
  }),
  sectionTitle: css({
    ...themes['font-montserrat-medium'],
    padding: '0.5em 0 0.5em 0.5em',
    fontSize: '0.9375em',
    color: variables.$landingPageListingAddressColor,
    '@media (min-width: 768px)': {
      fontSize: '1.125em',
      padding: '0.5em 1em',
    },
  }),
  noSuggestions: css({
    maxWidth: variables.$searchBoxMaxWidth,
    position: 'relative',
    backgroundColor: 'white',
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
    zIndex: '2',
    left: '50%',
    transform: 'translateX(-50%)',
    maxHeight: '45vh',
    padding: '0.5em',
    width: '90%',
    margin: '-0.1em 0',
    border: 'none',
    paddingTop: '1.5em',
    paddingBottom: '1.5em',
    boxShadow: variables.$boxShadowSearch,

    '@media (min-width: 768px)': {
      padding: '0.5em 1em',
    },
  }),
  hasSuggestion: css({
    visibility: 'hidden',
  }),
  certainCategorySearch: css({
    '& .ant-select-auto-complete .ant-input-affix-wrapper .ant-input-suffix': {
      right: '12px',
    },
  }),
  certainCategorySearchDropdown: css({
    '& .ant-select-dropdown-menu-item-group-title': {
      color: '#666',
      fontWeight: 'bold',
    },
    '& .ant-select-dropdown-menu-item-group': {
      borderBottom: '1px solid #F6F6F6',
    },
    '& .ant-select-dropdown-menu-item': {
      paddingLeft: '16px',
    },
    '& .ant-select-dropdown-menu-item.show-all': {
      textAlign: 'center',
      cursor: 'default',
    },
    '& .ant-select-dropdown-menu': {
      maxHeight: '300px',
    },
  }),
  certainCategoryIcon: css({
    color: '#6E6E6E',
    transition: 'all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
    fontSize: '16px',
  }),
};
