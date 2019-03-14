import { css } from 'glamor';

export default {
  wrapperContactForm: css({
    boxShadow: '0 0.25em 2em 0 lightgrey',
    padding: '0 0.9375em 1em',
    marginTop: '1.875em',

    '& form': {
      marginTop: '1em',
    },

    '@media(min-width: 768px)': {
      marginTop: '0',
      padding: '0 1.25em 1em',
    },
  }),

  wrapperSubmitBtn: {
    textAlign: 'center',
    ' button': {
      marginBottom: '1em',
    },
  },
};
