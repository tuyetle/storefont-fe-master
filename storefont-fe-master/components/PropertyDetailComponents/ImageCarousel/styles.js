import variables from '~/styles/variables';
import { css } from 'glamor';

const slickArrowHover = {
  border: `1px solid ${variables.$white}`,
  borderWidth: '0 3px 3px 0',
  outline: 'none',

  '@media(min-width: 768px)': {
    borderWidth: '0 2px 2px 0',
  },
};

const slickArrowBefore = {
  padding: '0 0.25em',
  fontSize: '1.25em',
  lineHeight: '1',
  opacity: '.75',
  color: 'white',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
};

const slickArrowAfter = {
  content: '""',
  position: 'absolute',
  border: `1px solid ${variables.$carouselArrow}`,
  borderWidth: '0 3px 3px 0',
  display: 'inline-block',
  top: '0',
  cursor: 'pointer',

  '@media(min-width: 768px)': {
    borderWidth: '0 2px 2px 0',
  },
};

const slickArrow = {
  position: 'absolute',
  top: '48%',
  zIndex: '10',
  outline: 'none',
  background: 'none',
  color: 'white',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontWeight: '500',
  textAlign: 'left',
  WebkitAppearance: 'none',
  padding: '1em 0',
  border: 'none',
  textIndent: '-100em',

  '&:hover, &:focus, &:active': {
    '&:after': {
      ...slickArrowHover,
    },
  },
};
export default {
  imageCarouselInner: css({
    '& .slider-property': {
      height: '310px',
      overflow: 'hidden',

      '& img': {
        height: '310px',
      },

      '@media(min-width: 768px)': {
        height: '600px',

        '& img': {
          height: 'auto',
        },
      },
    },

    '& .slider-property-nav': {
      height: '5.125em',
      marginTop: '0.425em',

      '& .slick-list': {
        paddingTop: '10px!important',
        height: '6.375em',

        '& .slick-track': {
          height: '4.9375em',
        },

        '@media(min-width: 768px)': {
          height: '8.25em',
          '& .slick-track': {
            height: '7.625em',
          },
        },
      },

      '& .slick-slide': {
        margin: '0 0.2em',
        paddingBottom: '0',
        position: 'relative',
        cursor: 'pointer',

        '& img': {
          maxWidth: '100%',
          height: '4.6875em',
          boxShadow: variables.$boxShadowCarouselThumbnailMobile,

          '@media(min-width: 768px)': {
            height: '6.875em',
            boxShadow: variables.$boxShadowCarouselThumbnail,
          },
        },

        '&.slick-current': {
          background: variables.$white,
          border: `1px solid ${variables.$locationTextColor}`,
          padding: '1px',
          marginTop: '-2px',

          '& img': {
            boxShadow: 'none',
          },

          '@media(min-width: 768px)': {
            marginTop: '-5px',
            border: `3px solid ${variables.$locationTextColor}`,
            padding: '3px',
          },
        },

        '@media(min-width: 768px)': {
          margin: '0 0.5em',
        },
      },

      '& .slick-arrow': {
        height: '3.3125em',
        width: '3.3125em',
        top: '25%',
        position: 'absolute',
        color: 'transparent',
        zIndex: '1',
        border: 'none',
        background: 'url(/static/assets/img/arrow.png) right center no-repeat',
        backgroundSize: 'contain',
        cursor: 'pointer',
        transform: 'rotate(0)',
        boxShadow: 'none',

        '&:after': {
          display: 'none',
        },

        '&.slick-prev': {
          left: '-2em',
          WebkitTransform: 'scaleX(-1)',
          transform: 'scaleX(-1)',
        },
        '&.slick-next': {
          right: '-2em',
        },
      },

      '@media(min-width: 768px)': {
        height: '8.125em',
      },
    },

    '& .slick-slide': {
      position: 'relative',
      img: {
        width: '100%',
      },
    },

    '& .slick-prev': {
      ...slickArrow,
      left: '0.7em',

      '&:after': {
        ...slickArrowAfter,
        padding: '10px',
        left: '0.2em',
        MozTransform: 'rotate(135deg)',
        MsTransform: 'rotate(135deg)',
        WebkitTransform: 'rotate(135deg)',
        transform: 'rotate(135deg)',
      },

      '&.slick-disabled': {
        '&:before': {
          opacity: '.25',
        },
      },

      '@media(min-width: 768px)': {
        '&:after': {
          padding: '11px',
          left: '1.1875em',
        },

      },
    },

    '& .slick-next': {
      ...slickArrow,
      right: '0.7em',

      '&:after': {
        ...slickArrowAfter,
        padding: '10px',
        right: '0.2em',
        MozTransform: 'rotate(315deg)',
        MsTransform: 'rotate(315deg)',
        WebkitTransform: 'rotate(315deg)',
        transform: 'rotate(315deg)',
      },

      '@media(min-width: 768px)': {
        right: '1.1875em',
        '&:after': {
          padding: '11px',
          right: '1.1875em',
        },
      },
    },

    '& .slick-dotted.slick-slider': {
      marginBottom: '1.875em',
    },

    '& .slick-dots': {
      position: 'absolute',
      bottom: '-0.0625em',
      display: 'block',
      width: '100%',
      padding: '0',
      margin: '0',
      listStyle: 'none',
      textAlign: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      '& li': {
        position: 'relative',
        display: 'inline-block',
        width: '5.5em',
        height: '3.25em',
        margin: '0.5em 0.1875em',
        cursor: 'pointer',
        '& img': {
          width: '5.5em',
          height: '3.25em',
          opacity: '0.5',
        },
        '& button': {
          fontSize: '0',
          lineHeight: '0',
          display: 'block',
          width: '1.25em',
          height: '1.25em',
          padding: '0.3125em',
          cursor: 'pointer',
          color: 'transparent',
          border: '0',
          outline: 'none',
          background: 'transparent',

          '&:hover': {
            outline: 'none',
            '&:before': {
              opacity: '1',
            },
          },

          '&:focus': {
            outline: 'none',
            '&:before': {
              opacity: '1',
            },
          },

          '&:before': {
            fontSize: '0.375',
            lineHeight: '1.25em',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '1.25em',
            height: '1.25em',
            textAlign: 'center',
            opacity: '.25',
            color: 'black',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',
          },
        },

        '&.slick-active': {
          '& button': {
            '&:before': {
              opacity: '.75',
              color: 'black',
            },
          },
          '& img': {
            opacity: '1',
          },
        },
      },
    },
  }),

  captionText: css({
    position: 'absolute',
    left: '60px',
    transform: 'translateX(-50%)',
    bottom: '15px',
    boxShadow: variables.$boxShadowCaptionText,
    borderRadius: '0.9375em',
    border: `1px solid ${variables.$white}`,
    fontSize: '0.8125em',
    color: variables.$white,
    padding: '0.1em 1.25em',

    '& .imageText': {
      marginLeft: '0.5em',
    },

    '@media(min-width: 768px)': {
      left: '50%',
      bottom: '66px',
    },
  }),
};

