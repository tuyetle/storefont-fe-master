import { css } from 'glamor';
import variables from '~/styles/variables';

export default{
  form: css({
    margin: '1.5em 0',
  }),
  logo: css({
    marginTop: '-2.5rem',
    '& img': {
      width: '5rem',
      height: '5rem',
    },
  }),
  thirdPartyLogo: css({
    '& img': {
      width: '5rem',
      height: '5rem',
      margin: '0.5rem',
    },
  }),
  input: css({
    border: 'none',
    borderRadius: '0',
    borderBottom: '1px solid lightgray',
    '&:focus': {
      borderBottomColor: variables.$focusBorderBlue,
    },
  }),
  label: css({
    float: 'right',
    paddingLeft: '1rem',
  }),
  error: css({
    border: 'none',
    borderRadius: '0',
    borderBottom: '1px solid red',
  }),
  errorMsg: css({
    textAlign: 'left',
    color: 'red',
    fontSize: '0.8em',
  }),
  submitButton: css({
    fontSize: '1em',
    lineHeight: '1.25',
    backgroundColor: variables.$commonRed,
    color: 'white',
    boxShadow: '0.25em 0.25em 0.25em #36343e94',
  }),
  wrapperRegister: css({
    margin: '1em 0',
    lineHeight: '2.25em',
    '& button': {
      textTransform: 'uppercase',
      color: variables.$commonRed,
      cursor: 'pointer',
    },
  }),
};
