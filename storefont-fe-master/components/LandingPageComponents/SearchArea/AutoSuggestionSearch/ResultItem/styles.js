import variables from '~/styles/variables';
import themes from '~/styles/themes';

export default {
  resultItem: {
    padding: 0,
    color: variables.$colorWelcome,
  },
  resultImg: {
    margin: '0.3em',
    height: '1.25em',
    width: '2em',
  },
  resultImgHighlight: {
    ...themes['font-montserrat-light'],
    color: variables.$colorWelcome,
  },
  resultText: {
    ...themes['font-montserrat-light'],
    color: variables.$colorWelcome,
    fontSize: '0.8125em',
    marginLeft: '0.5em',
    '@media (min-width: 768px)': {
      fontSize: '0.9375em',
    },
  },
};
