import { css } from 'glamor';
import variables from '~/styles/variables';
import themes from '~/styles/themes';

export default {
  rightBoder: css({
    borderRight: `1px solid ${variables.$white}`,
  }),

  title: css({
    ...themes['font-notoserif-regular'],
    textAlign: 'left',
    fontSize: '0.9375em',
    lineHeight: '1.4',
    maxHeight: '4.0625em',
    overflow: 'hidden',
    marginBottom: '0.4em',
    color: variables.$colorSite,

    '@media(min-width: 768px)': {
      fontSize: '1.625em',
      lineHeight: '1.35',
      marginBottom: '0.6em',
    },
  }),
};
