import { css } from 'glamor';
import variables from '~/styles/variables';

export default {
  attributes: css({
    marginBottom: '2em',
    padding: '0',
    listStylePosition: 'inside',
  }),

  attribute: css({
    color: variables.$colorSite,
    fontSize: '0.9375em',
    position: 'relative',
    listStyle: 'none',
    paddingLeft: '1.5625em',

    '&::before': {
      content: `''`,
      position: 'absolute',
      width: '6px',
      height: '6px',
      top: '50%',
      left: '0',
      transform: 'translateY(-50%)',
      border: `1px solid ${variables.$locationTextColor}`,
    },
  }),
};
