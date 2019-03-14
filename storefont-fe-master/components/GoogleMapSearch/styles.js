import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  googleMap: css({
    height: variables.$mobileSearchingResultHeight,
    width: '100vw',
    '@media(min-width: 768px)': {
      height: variables.$searchingResultHeight,
      width: 'auto',
    },
  }),
  closeButton: css({
    position: 'absolute',
    top: '1em',
    right: '1em',
    borderRadius: '50%',
    background: 'white',
    width: '4em',
    height: '4em',
    paddingTop: '0.5em',
    zIndex: '10',
    textAlign: 'center',
    boxShadow: '0 0.25em 1em 0.125em grey',
  }),
};
