import { css } from 'glamor';
import variables from '~/styles/variables';
import themes from '~/styles/themes';

const iconArrow = {
  border: `solid ${variables.$commonRed}`,
  borderWidth: '0 1px 1px 0',
  display: 'inline-block',
  padding: '0.3125em',
};

export default {
  submitButtonContainer: css({
    display: 'inline-block',
    marginLeft: '1.3em',
    position: 'absolute',
    left: '-1.375em',

    '& .collapse': {
      zIndex: '99',
      transition: 'all .5s ease-out',
    },
  }),

  iconOpenUp: css({
    ...iconArrow,
    transform: 'rotate(-135deg)',
    WebkitTransform: 'rotate(-135deg)',
  }),

  btnRequest: css({
    ...themes['button-red'],
    ...themes['font-montserrat-medium'],
    width: '100%',

    '&:focus, &:active': {
      outline: 'none',
      cursor: 'pointer',
    },
  }),

  iconSend: css({
    marginRight: '0.1875em',
  }),

  openForm: css({
    cursor: 'pointer',
    display: 'block',
    textAlign: 'center',
    marginTop: '-2px',
    background: 'none',
    border: 'none',
    margin: '0 auto',
    ':focus': {
      outline: 'none',
    },
  }),

  iconOpenDown: css({
    ...iconArrow,
    transform: 'rotate(45deg)',
    WebkitTransform: 'rotate(45deg)',
  }),

  floatingContactFormWrap: css({
    boxShadow: '0 0.25em 2em 0 lightgrey',
    padding: '0.5em 1.25em 1em',
    width: variables.$widthContactForm,
    background: variables.$white,
  }),

  showButton: css({
    width: '13.4375em',
    display: 'inherit',
    marginLeft: '0.9375em',

    '& .form-group': {
      display: 'none',
    },

  }),

  hideButton: css({
    display: 'none',

    '& .form-group': {
      display: 'block',
    },

  }),
};

