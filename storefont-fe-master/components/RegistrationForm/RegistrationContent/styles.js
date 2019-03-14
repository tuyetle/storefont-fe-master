import { css } from 'glamor';
import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  form: css({
    paddingTop: '3.313em',
    paddingBottom: '5.688em',
    margin: '0 auto',
    width: '80%',
    '@media (min-width: 768px)': {
      width: '70%',
    },
  }),
  title: css({
    ...themes['font-notoserif'],
    fontSize: '1.563em',
    textAlign: 'center',
  }),
  description: css({
    marginTop: '1em',
    textAlign: 'center',
    marginBottom: '2em',
  }),

  rulesAndCondition: css({
    textAlign: 'center',
    fontSize: '0.813em',
    '@media (min-width: 768px)': {
      margin: '0 4em',
    },
  }),
  linkRules: css({
    color: 'red',
  }),
  captcha: css({
    display: 'block',
    alignSelf: 'center',
    '& #g-recaptcha': {
      transform: 'scale(0.77)',
      '@media (min-width: 768px)': {
        transform: 'scale(1)',
        '& div': {
          margin: '0 auto',
        },
      },
    },
  }),
  checkbox: css({
    margin: '1.374em 0 1.875em 0',
    '& input[type=checkbox]': {
      verticalAlign: 'middle',
      marginRight: '0.688em',
    },
  }),

  input: css({
    marginTop: '0.875em',
    marginBottom: '0.188em',
    borderRadius: '0',
    borderBottom: '1px solid lightgray',
    border: '1px solid lightgray',
    '&:focus': {
      borderBottomColor: variables.$focusBorderBlue,
      boxShadow: 'none',
    },

    '&.form-control:focus': {
      boxShadow: 'none',
      border: '1px solid lightgray',
    },
  }),

  error: css({
    border: 'none',
    borderRadius: '0',
    borderBottom: '1px solid red',
  }),

  errorMsg: css({
    textAlign: 'center',
    color: 'red',
    fontSize: '0.8em',
    marginBottom: '1em',
  }),

  successMsg: css({
    marginBottom: '1em',
    textAlign: 'center',
    fontSize: '1em',
    color: variables.$colorSuccessMessage,
  }),

  submitButton: css({
    ...themes['submit-button'],
  }),

  disableSubmitButton: css({
    ...themes['disable-submit-button'],
  }),
};
