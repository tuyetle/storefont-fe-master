import { css } from 'glamor';

export default {
  container: css({
    display: 'inline-block',
    marginLeft: '1em',
    verticalAlign: 'middle',
    '& span': {
      marginLeft: '-0.5em',
    },
    '& input': {
      display: 'none',
    },
    'input[type="radio"]:checked + span': {
      opacity: '0.5',
    },
    'input[type="checkbox"]:checked + span': {
      opacity: '0.5',
    },
  }),
  iconView: css({
    height: '20px',
    width: '20px',
  }),
};
