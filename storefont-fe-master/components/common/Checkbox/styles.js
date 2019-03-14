import variables from '~/styles/variables';
import { css } from 'glamor';

export default{
  checkbox: css({
    marginLeft: '0',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    border: `1px solid ${variables.$checkboxBorder}`,
    backgroundColor: 'white',
    width: '1.3em',
    height: '1.3em',
    fontFamily: 'FontAwesome',
    textAlign: 'center',
    position: 'relative',
    outlineStyle: 'none',
    '&:checked:before': {
      content: '\\f00c',
      color: `${variables.$checkedColor}`,
      position: 'absolute',
      top: '-0.2em',
      left: '0.1em',
    },
  }),
};
