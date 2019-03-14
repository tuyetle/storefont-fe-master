import { css } from 'glamor';
import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  title: css({
    ...themes['font-notoserif'],
    fontSize: '1.250em',
    '@media (min-width: 768px)': {
      fontSize: '1.563em',
    },
    textAlign: 'center',
  }),
  label: css({
    fontSize: '0.875em',
  }),
  description: css({
    marginTop: '1em',
    textAlign: 'center',
    marginBottom: '2em',
    fontSize: '0.938em',
  }),

  input: css({
    border: 'none',
    marginTop: '0.875em',
    marginBottom: '0.188em',
    borderRadius: '0',
    borderBottom: '1px solid lightgray',
    '&:focus': {
      borderBottomColor: variables.$focusBorderBlue,
      boxShadow: 'none',
      outline: 'none',
    },

    '&.form-control:focus': {
      boxShadow: 'none',
      border: '1px solid lightgray',
    },
  }),

  submitButton: css({
    ...themes['submit-button'],
  }),

  disableSubmitButton: css({
    ...themes['disable-submit-button'],
  }),
};
