import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  property: {
    marginRight: '0',
    paddingTop: '2.0em',
    transition: 'all .3s ease-out',
    '&:hover': {
      '@media (min-width: 768px)': {
        paddingTop: '0',
      },
    },

    '@media (min-width: 768px)': {
      marginRight: '0.5em',
      marginLeft: '0.5em',
    },
  },

  img: {
    width: '100%',
    height: 'auto',
    boxShadow: `0em 0em 0.625em 0em ${variables.$landingPageHLItemImageBoxShadowColor}`,
    '@media (min-width: 768px)': {
      height: '14.5em',
    },
  },

  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },

  info: {
    textAlign: 'center',
    border: 'none',
    position: 'relative',
    top: '-4em',
    background: variables.$bgDescription,
    width: '86%',
    left: '7%',
    padding: '1em',
    boxShadow: `0.3em 0.3em 0.8em 0.1em ${variables.$landingPageHLItemBoxShadowColor}`,

    '.slick-active &': {
      background: 'white',
    },
    '@media (min-width: 768px)': {
      background: 'white',
      // height: '8.25em',
      width: '92%',
      left: '4%',
    },
  },

  title: {
    ...themes['font-notoserif'],
    color: variables.$landingPageListingTitleColor,
    fontSize: '1em',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    paddingBottom: '0.2em',
    '@media  (min-width: 768px)': {
      fontSize: '1.5em',
    },
  },

  address: {
    ...themes['font-montserrat-light'],
    color: variables.$landingPageListingAddressColor,
    fontSize: '0.75em',
    height: '3em',
    overflow: 'hidden',
  },

  price: {
    ...themes['font-montserrat-medium'],
    color: variables.$landingPageListingPriceColor,
    fontSize: '0.9em',
    marginTop: '0.5em',
    textTransform: 'uppercase',
  },
};
