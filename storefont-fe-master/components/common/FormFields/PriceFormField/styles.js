import { css } from 'glamor';
import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  disabled: css({
    backgroundColor: `${variables.$priceInputDisableBg}`,
    borderColor: `${variables.$priceInputDisableBorder}`,
    borderWidth: '1px',
    '&:focus': {
      backgroundColor: `${variables.$priceInputDisableBg}`,
    },
  }),
  error: css({
    ...themes['error-field'],
  }),
};
