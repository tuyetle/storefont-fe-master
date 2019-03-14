import { css } from 'glamor';

export default{
  indicator: css({
    float: 'right',
    '&:after': {
      clear: 'both',
    },
  }),
};
