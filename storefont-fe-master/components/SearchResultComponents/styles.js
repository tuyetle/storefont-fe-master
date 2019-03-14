import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  content: css({
    display: 'flex',
    flexFlow: 'row nowrap',
    flex: '1 1 auto',
    position: 'relative',
    zIndex: '1',
    height: variables.$mobileSearchingResultHeight,
    '@media (min-width: 768px)': {
      height: variables.$searchingResultHeight,
    },
  }),
  searchBar: css({
    position: 'relative',
    zIndex: '10',
    top: '0',
  }),
  listingView: css({
    display: 'flex',
    flexFlow: 'column nowrap',
    flex: '1 1 50%',
    minWidth: '0',
    width: '100vw',
    height: '100%',
  }),
  mapView: css({
    flexBasis: '57%',
    top: 'initial',
    right: 'initial',
    bottom: 'initial',
    left: 'initial',
    borderLeft: `0.1em solid ${variables.$searchResultMapBorder}`,
    flexGrow: '0',
    flexShrink: '0',
    backgroundColor: variables.$searchResultMapBackground,

    '&.hide': {
      flexBasis: '0',
    },
  }),
  header: css({
    height: '10%',
    backgroundColor: variables.$searchResultBarBackgroundColor,
    '@media (min-width: 768px)': {
      height: '2em',
    },
  }),
  actionBar: css({
    flex: '0 0 auto',
    width: '100%',
    height: '100%',
    color: variables.$searchResultActionBarColor,
    backgroundColor: variables.$searchResultBarBackgroundColor,
    boxSizing: 'border-box',
    paddingLeft: '0.9em',
    paddingRight: '0.7em',

    '@media (min-width: 768px)': {
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingLeft: '1.875em',
      paddingRight: '1.875em',
    },
  }),
  results: css({
    fontSize: '0.8125em',
    display: 'inline-block',
    verticalAlign: 'middle',
    color: 'darkslategray',
    marginTop: '1.2em',
    '@media (min-width: 768px)': {
      display: 'inline-flex',
      flexDirection: 'row',
      marginLeft: '0',
      marginTop: '0',
      fontSize: '0.9375em',
    },
  }),
  buttons: css({
    display: 'inline-block',
    verticalAlign: 'middle',
    float: 'right',
    marginTop: '0.4em',

    '& .form-group': {
      marginBottom: '0',
      '& .btn': {
        marginBottom: '0',
        padding: '0.375em',
      },
    },
    '@media (min-width: 768px)': {
      justifyContent: 'flex-end',
      flex: '0 1 auto',
      float: 'none',
    },
  }),
  mainView: css({
    flex: '1 1 auto',
    backgroundColor: variables.$searchResultBarBackgroundColor,
  }),
  mainGirdMapView: css({
    height: 'calc(100% - 6em)',
    overflowX: 'hidden',
    overflowY: 'scroll',
  }),
  mainViewTranscluder: css({
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: '0',
    '& h6': {
      fontWeight: 'normal',
      fontSize: '0.9em',
    },
    '& h5': {
      fontSize: '1.25em',
    },
    '@media (min-width: 768px)': {
      marginTop: '0.4em',
    },

  }),
  footer: css({
    backgroundColor: variables.$searchResultBarBackgroundColor,
    padding: '1em',
    height: '4em',
  }),
  number: css({
    fontWeight: '600',
    margin: '0 0.4em',
  }),
};
