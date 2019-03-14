import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  facetSearch: css({
    width: '20.438em',

  }),
  listView: css({
    width: '100%',
    '@media (min-width: 1280px)': {
      width: '75%',
    },
    '@media (min-width: 1920px)': {
      width: '80%',
    },
    height: `calc(${variables.$searchingResultHeight} - 15vh)`,
    overflow: 'auto',
  }),
};
