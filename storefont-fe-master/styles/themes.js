import variables from './variables';

const submitButton = {
  fontSize: '1em',
  width: '100%',
  border: 'none',
  height: '3.188em',
  textTransform: 'uppercase',
  marginTop: '1.12em',
  marginBottom: '1.188em',
  color: 'white',
  fontWeight: 'bold',
  backgroundColor: '#ed1c24',
  boxShadow: variables.$boxShadowRegisterSubmit,
  lineHeight: '1.25',
  cursor: 'pointer',
};

export default {
  'font-sans': {
    fontFamily: 'sans-serif',
    fontStyle: 'normal',
    fontSize: '2rem',
    fontWeight: 200,
  },

  'font-roboto': {
    fontFamily: 'Roboto',
  },

  'font-roboto-bold': {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 'bold',
  },

  'font-montserrat': {
    fontFamily: 'Montserrat',
    fontWeight: 400,
  },

  'font-montserrat-medium': {
    fontFamily: 'Montserrat',
    fontWeight: 500,
  },

  'font-montserrat-semibold': {
    fontFamily: 'Montserrat',
    fontWeight: 600,
  },

  'font-montserrat-bold': {
    fontFamily: 'Montserrat',
    fontWeight: 700,
  },

  'font-montserrat-light': {
    fontFamily: 'Montserrat',
    fontWeight: 300,
  },

  'font-montserrat-thin': {
    fontFamily: 'Montserrat',
    fontWeight: 100,
  },

  'font-montserrat-light-italic': {
    fontFamily: 'Montserrat',
    fontWeight: 300,
    fontStyle: 'italic',
  },

  clear: {
    clear: 'both',
  },

  'error-field': {
    border: `1px solid ${variables.$formErrorColor}`,
    borderRadius: '0.3em',
  },

  'error-message': {
    color: variables.$formErrorColor,
    fontSize: '0.875em',
  },

  'font-vnf-narziss': {
  },

  'font-notoserif': {
    fontFamily: 'Noto Serif, serif',
  },

  'font-notoserif-regular': {
    fontFamily: 'Noto Serif, serif',
    fontWeight: '400',
  },

  'font-notoserif-bold': {
    fontFamily: 'Noto Serif, serif',
    fontWeight: '700',
  },

  'button-red': {
    background: variables.$commonRed,
    boxShadow: variables.$boxShadowButton,
    padding: '0.6em 1.85em',
    fontSize: '1em',
    color: variables.$white,
    textTransform: 'uppercase',
    cursor: 'pointer',
    border: 'none',

    '&:focus, &:active': {
      outline: 'none',
      WebkitAppearance: 'none',
      border: 'none',
    },
  },

  'submit-button': {
    ...submitButton,
    '&:focus': {
      outline: 'none',
      boxShadow: 'none',
    },
  },

  'disable-submit-button': {
    ...submitButton,
    opacity: '0.65',
  },
};
