import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  searchArea: css({
    color: 'slategray',
    paddingBottom: '15%',
  }),

  wrapperSeachingCategory: css({
    margin: '2em auto',

    '> span': {
      color: 'white',
      padding: '0.25em',
    },

    '& .ant-radio-button-wrapper, .ant-radio-button-wrapper-checked': {
      background: 'transparent',
      boxShadow: 'initial',
      fontSize: 'large',
      color: 'white',
    },

    '& .ant-radio-button-wrapper': {
      border: '0.125em solid transparent',
    },

    '& .ant-radio-button-wrapper-checked': {
      border: '0.125em solid white',
      borderRadius: 'inherit',
    },

    '& .ant-radio-button-wrapper:not(:first-child)::before': {
      display: 'none',
    },
  }),

  radioGroup: css({
    '& .ant-radio-button-wrapper:first-child': {
      border: 'none',
    },

    '& .ant-radio-button-wrapper-checked:first-child': {
      border: '.125em solid white',
      '&:hover': {
        border: `.125em solid ${variables.$stepProgressBoxShadow}`,
      },
    },
  }),
  icon: css({
    width: '1em',
    marginRight: '0.25em',
    marginTop: '-0.25em',
  }),
};
