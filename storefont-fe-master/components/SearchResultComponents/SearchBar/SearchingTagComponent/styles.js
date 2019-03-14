import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  wrapper: css({
    width: '100%',
    padding: '0.25em 0',
    display: 'flex',
    alignItems: 'center',
    '& .Select': {
      display: 'inline-block',
      width: '100%',
      '& .Select-control': {
        outline: 'none',
        border: 'none',
        boxShadow: 'none',
        '&:hover': {
          boxShadow: 'none',
        },
      },
      '& .Select-menu-outer': {
        zIndex: variables.$zIndexDropdown, left: '-3em',
      },
    },
  }),
};
