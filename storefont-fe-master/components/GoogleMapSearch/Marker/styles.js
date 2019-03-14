import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  markerCluster: css({
    position: 'absolute',
    cursor: 'pointer',
    width: '5rem',
    height: '5rem',
    borderRadius: '50%',
    border: `1px solid ${variables.$clusterColor}`,
    backgroundClip: 'content-box',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: '1',
    padding: '1rem',
    backgroundColor: variables.$clusterColor,
    boxShadow: `0.2em 0.2em 0.2em 0.2em ${variables.$clusterShadow}`,
    '&:hover': {
      backgroundColor: variables.$clusterColor,
    },
  }),

  text: css({
    fontSize: '1em',
  }),

  listingMarker: css({
    minWidth: '7em',
    fontSize: '0.7rem',
    backgroundColor: variables.$clusterColor,
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    cursor: 'pointer',

    border: `1px solid ${variables.$clusterColor}`,
    borderRadius: '1rem',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: variables.$clusterColor,
      color: 'white',
    },
  }),

  groupListingsMarker: css({
    minWidth: '5em',
    fontSize: '0.7rem',
    boxShadow: `0.2em 0.2em 0.2em 0.2em ${variables.$clusterShadow}`,
    backgroundColor: variables.$clusterColor,
    paddingTop: '0.5em',
    paddingBottom: '0.5em',
    cursor: 'pointer',

    border: `1px solid ${variables.$clusterColor}`,
    borderRadius: '1rem',
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      backgroundColor: variables.$clusterColor,
      color: 'white',
    },
  }),

  groupListingModal: css({
    background: 'white',
    position: 'fixed',
    overflow: 'auto',
    maxHeight: '30vh',
    overflowY: 'auto',
    width: '36em',
    padding: '0',
    zIndex: '300',
    '@media(min-width: 768px)': {
      width: '30rem',
      padding: '1em',
      paddingTop: '0',
    },
  }),

  groupListings: css({
    clear: 'both',
  }),

  closeButton: css({
    color: 'red',
    fontSize: '1.3em',
    padding: '1em',
    cursor: 'pointer',
    height: '2em',
    float: 'right',
    zIndex: '9000',
    marginTop: '-0.5em',
  }),

  listingPreview: css({
    width: '30rem',
  }),
};
