import { css } from 'glamor';
import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  chkUtility: css({
    display: 'none',
  }),
  utility: css({
    opacity: '0.5',
    fontWeight: 'normal',
  }),
  active: css({
    opacity: '1',
  }),
  icUtility: css({
    display: 'block',
    width: '2.6875em',
    height: '2.6875em',
    lineHeight: '3.5em',
    boxShadow: variables.$boxShadowUtilityIcon,
    borderRadius: '50%',
  }),
  utilityLabel: css({
    ...themes['font-montserrat-light'],
    color: variables.$colorSite,
    display: 'inline-block',
    fontSize: '0.8125em',
    marginTop: '1em',
  }),
};
