export default {
  adsWrapper: {
    '@media (max-width: 767px)': {
      padding: '0 0.9375em',
    },
  },

  ads: {
    display: 'block',
    border: '1px solid red',
  },
  banner728x90: {
    width: '100%',
    maxWidth: '640px',
    height: '75px',

    '@media (min-width: 768px)': {
      maxWidth: '728px',
      height: '90px',
    },
  },
  banner300x600: {
    width: '300px',
    height: '600px',
  },
  banner300x250: {
    width: '300px',
    height: '250px',
  },
};
