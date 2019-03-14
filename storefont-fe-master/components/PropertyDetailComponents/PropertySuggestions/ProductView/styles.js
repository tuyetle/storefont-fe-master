import variables from '~/styles/variables';
import themes from '~/styles/themes';
import { css } from 'glamor';

export default {
  container: css({
    position: 'relative',
    margin: '0 auto 25px auto',
    padding: '0',
    zIndex: '2',
    width: '100%',
    '@media(min-width: 768px)': {
      width: '22.5em',
      padding: '1em 0.5em',
    },
  }),
  image: css({
    width: '100%',
    height: '15.625em',
    '@media(min-width: 768px)': {
      height: '16.875em',
    },
  }),
  content: css({
    width: 'calc(100%)',
    height: 'auto',
    maxWidth: '45.938em',
    background: 'white',
    flexBasis: '0',
    flexGrow: '1',
    boxShadow: variables.$boxShadowProductView,
    position: 'relative',
    '@media(min-width: 768px)': {
      width: '100%',
      maxWidth: '22.5em',
      height: '31.5em',
    },
  }),
  widthIcon: css({
    width: '0.9em',
    marginRight: '0.3em',
    '@media(min-width: 768px)': {
      width: '1.1em',
    },
  }),
  iconVAlign: css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(20%)',
  }),
  locationVAlign: css({
    position: 'relative',
    top: '-50%',
    transform: 'translateY(-15%)',
  }),
  header: css({
    position: 'relative',
    cursor: 'pointer',
  }),
  detailClassName: css({
    padding: '0.9375em',

    '@media(min-width: 768px)': {
      padding: '1.3em 1.125em 1.125em',
    },
  }),
  subTitle: css({
    position: 'absolute',
    '&.TOP': {
      background: 'url(/static/assets/img/top-badge.png) top left no-repeat',
      width: '5.500em',
      height: '5.563em',
      left: '-0.5em',
      top: '-0.5em',
    },
    '& span': {
      display: 'none',
    },
    '&.EXPRESS': {
      background: 'url(/static/assets/img/express-badge.png) top left no-repeat',
      width: '11.188em',
      height: '2.125em',
      left: '50%',
      top: '.75em',
      marginLeft: '-5.594em',
    },
    '&.BASIC': {
      display: 'none',
    },
    '&.PREMIUM': {
      display: 'none',
    },
  }),
  title: css({
    '& a:hover': {
      textDecoration: 'none',
    },
    '& h5': {
      ...themes['font-notoserif-regular'],
      textAlign: 'left',
      cursor: 'pointer',
      color: `${variables.$colorSite}`,
      fontSize: '0.9375em',
      lineHeight: '1.375em',
      fontWeight: 'normal',
      margin: 0,
    },
    '@media(min-width: 768px)': {
      '& h5': {
        fontSize: '1.125em !important',
        lineHeight: '1.44',
        height: '2.5em',
        overflow: 'hidden',
      },
    },
  }),
  addressIcon: css({
    position: 'relative',
    verticalAlign: 'top',

    '@media(min-width: 768px)': {
      fontSize: '0.9375em',
      marginTop: '1px',
    },
  }),
  addressText: css({
    ...themes['font-montserrat-light'],
    display: 'inline-block',
    width: 'calc(100% - 2em)',
    fontSize: '0.8125em',
    color: `${variables.$colorSite}`,

    '@media(min-width: 768px)': {
      fontSize: '0.938em',
    },
  }),
  address: css({
    marginTop: '0.8em',
    color: variables.$colorSite,

    '& .SVGInline': {
      position: 'absolute',
      paddingTop: '0.25em',
    },
    '@media(min-width: 768px)': {
      marginTop: '0.8em',
      height: '2.5em',
      overflow: 'hidden',
    },
  }),
  info: css({
    marginTop: '0',
    fontSize: '0.8125em',

    '& div span': {
      fontWeight: 300,
      paddingLeft: '0.5em',
    },

    '@media(min-width: 768px)': {
      marginTop: '1em',
      height: '1.5em',
      fontSize: ' 0.9375em',
    },
  }),
  inline: css({
    display: 'inline-block',
    paddingRight: '1.2em',

    '@media(min-width: 768px)': {
      paddingRight: '0.8em',
    },
  }),
  price: css({
    float: 'right',
    maxWidth: '4.875em',
    color: `${variables.$priceColor}`,
    fontWeight: 'bold',
    fontSize: '1.0625em',
    textTransform: 'uppercase',
    marginTop: '-0.2em',

    '@media(min-width: 768px)': {
      fontSize: '1.375em',
    },
  }),
  save: css({
    width: '100%',
    '& a': {
      ...themes['font-montserrat-medium'],
      display: 'inline-block',
      paddingLeft: '0.5em',
      textDecoration: 'none',
      color: `${variables.$colorSite}`,
      textTransform: 'uppercase',
      fontSize: '1em',
    },
    '& a:hover': {
      color: `${variables.$colorSite}`,
      textDecoration: 'none',
    },
    '@media(min-width: 768px)': {
      position: 'absolute',
      left: 0,
      bottom: 0,
    },
    hearIcon: {
      position: 'relative',
      top: '0.3em',
    },
  }),
  saveWrap: css({
    borderTop: `0.125em solid ${variables.$productViewBorder}`,
    margin: 'auto 0.9375em',
    padding: '0.9375em',

    '@media(min-width: 768px)': {
      margin: 'auto 1.125em',
      padding: '1.125em 0em',
    },
  }),
};
