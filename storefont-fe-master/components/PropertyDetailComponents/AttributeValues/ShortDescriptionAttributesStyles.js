import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  shortDescription: css({
    marginBottom: '2em',
    padding: '0',
    listStylePosition: 'inside',
  }),

  shortDescriptionItem: css({
    color: variables.$colorUtilityDisplay,
    display: 'inline-block',
    fontSize: '0.9375em',
    position: 'relative',
    listStyle: 'none',
    marginRight: '0.8125em',
    // borderRadius: '0.84375em',
    // backgroundColor: variables.$white,
    // boxShadow: variables.$boxShadowShortDescription,
    padding: '0.2em 1em 0.2em 0',
  }),

};
