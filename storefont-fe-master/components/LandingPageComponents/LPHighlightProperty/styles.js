import themes from '~/styles/themes';
import variables from '~/styles/variables';

export default {
  property: {
    padding: '2em',
    '& .nav': {
      marginBottom: '0',
    },
    '& .nav-link': {
      display: 'block',
      margin: '.5em 1em',
      padding: '0',
    },
    '& .nav-item': {
      ...themes['font-montserrat-medium'],
      textTransform: 'uppercase',
      color: variables.$landingPageTabTitleColor,
      cursor: 'pointer',
    },
    '& .nav-item a.active': {
      borderBottom: '0.15em solid black',
    },
    '& .slick-arrow': {
      marginBottom: '1em',
      position: 'absolute',
      top: '7em',
      color: 'transparent',
      right: '-2em',
      zIndex: '1',
      border: 'none',
    },
    '& .slick-arrow:hover:focus': { outline: 'none' },
    '& .slick-prev': {
      float: 'left',
      background: 'url(/static/assets/img/arrow.png) right center no-repeat',
      transform: 'scaleX(-1)',
      cursor: 'pointer',
      height: '4em',
      width: '4em',
      left: '-2em',
    },
    '& .slick-next': {
      float: 'right',
      background: 'url(/static/assets/img/arrow.png) right center no-repeat',
      cursor: 'pointer',
      height: '4em',
      width: '4em',
    },
    '& .slick-track': {
      width: '4810px',

      '& .slick-slide': {
        '&.slick-active': {
          '@media (max-width: 767px)': {
            marginTop: '-2.5em',
          },
        },
      },
    },
    '& .dot': {
      textAlign: 'center',
      WebkitTapHighlightColor: 'transparent',
      minHeight: '29px',
    },
    '& .dot li': {
      display: 'inline-block',
      zoom: '1',
      cursor: 'pointer',
    },
    '& .dot li button': {
      background: 'url(/static/assets/img/rectangle-blank.png) right center no-repeat',
      width: '1.2em',
      height: '1.2em',
      margin: '0.25em',
      display: 'block',
      WebkitBackfaceVisibility: 'visible',
      transition: 'opacity .2s ease',
      border: 'none',
      color: 'transparent',
      outline: 'none',
    },
    '& .dot li.slick-active button': {
      background: 'url(/static/assets/img/rectangle.png) right center no-repeat',
    },
    '& .tab-content > .tab-pane': {
      display: 'block',
      height: '0',
      overflow: 'hidden',
    },
    '& .tab-content > .tab-pane.active': {
      height: 'auto',
      overflow: 'visible',
    },
  },
  propertyItem: {
    width: '17.34375em',
    display: 'inline-block',
  },
};
