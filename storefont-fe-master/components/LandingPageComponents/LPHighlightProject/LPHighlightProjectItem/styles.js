import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  project: {
    marginBottom: '2em',
    padding: '3em 0 1em 0',
    transition: 'all .3s ease-out',
    position: 'relative',
    '& .bgImg': {
      '@media (min-width: 768px)': {
        width: '100%',
        margin: '0 auto',
        backgroundImage: 'transperant',
        padding: '0.85em 1em',
      },
    },

    '&:hover': {
      '@media (min-width: 768px)': {
        paddingTop: '0.5em',

        '& .bgImg': {
          backgroundImage: 'url(/static/assets/img/project-hover.png)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          padding: '0.85em 1em',
        },
      },
    },


    '@media (min-width: 768px)': {
      marginRight: '1em',
      padding: '3em 0 0 0',
    },
  },

  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },

  img: {
    margin: '0 auto',
    width: '100%',
    height: 'auto',
    boxShadow: `0 5px 19.4px 4.6px ${variables.$landingPageHLItemImageBoxShadowColor}`,
    '@media (min-width: 768px)': {
      width: '100%',
    },
  },

  info: {
    textAlign: 'center',
    position: 'absolute',
    bottom: '-4em',
    background: 'white',
    width: '80%',
    left: '10%',
    padding: '1.2em',
    height: '10em',
    boxShadow: `0.3em 0.3em 0.8em 0.1em ${variables.$landingPageHLItemBoxShadowColor}`,
    '.slick-active &': {
      background: 'white',
    },
    '@media (min-width: 768px)': {
      background: 'white',
    },
  },

  title: {
    ...themes['font-notoserif'],
    color: variables.$landingPageListingTitleColor,
    fontSize: '1.4em',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    paddingBottom: '0.5em',
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
    marginTop: '0.6em',
    textTransform: 'uppercase',
  },

};
