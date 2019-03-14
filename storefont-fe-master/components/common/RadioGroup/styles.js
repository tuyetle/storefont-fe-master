
import { css } from 'glamor';
// import variables from '~/styles/variables';

// const shadow = variables['$stepProgressBoxShadow'];

export default {
  radioGroupItem: css({
    '& .ant-radio-button-wrapper': {
      color: 'white',
      border: '.125em solid transparent',
      textTransform: 'uppercase',
      boxShadow: 'none',
      outline: '0',
      borderRadius: '0',

      '&:first-child': {
        border: '.125em solid transparent',
      },
      '&:hover': {
        color: 'white',
        boxShadow: 'none',
      },

      '&:focus, &:active': {
        borderRadius: '0',
        color: 'white',
        border: '.125em solid white',
        boxShadow: 'none',
        outline: 'none',
      },

      '&.ant-radio-button-wrapper-checked': {
        borderRadius: '0',
        border: '.125em solid white',
        color: 'white',
        '&:hover': {
          boxShadow: 'none',
        },
      },
    },

  }),
};
