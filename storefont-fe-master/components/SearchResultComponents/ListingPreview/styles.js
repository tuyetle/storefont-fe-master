import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  container: css({
    fontFamily: 'Montserrat',
    position: 'relative',
    zIndex: '2',
    width: '36em',
    '@media(min-width: 768px)': {
      width: '45em',
    },
  }),
  image: css({
    width: '100%',
    height: 'auto',
    maxHeight: '12em',
    '@media(min-width: 768px)': {
      height: '100%',
    },
  }),
  content: css({
    width: 'calc(100%)',
    height: 'auto',
    maxWidth: '45.938em',
    background: 'white',
    flexBasis: '0',
    flexGrow: '1',
    boxShadow: '2.2px 5.6px 9px 1px #53595c26',
    position: 'relative',
    '@media(min-width: 768px)': {
      width: '100%',
      height: '12em',
    },
  }),
  twoColumns: css({
    '& h5': {
      fontSize: '1.15em',
    },
    '& h6': {
      fontSize: '1em',
    },
  }),
  padding1: css({
    padding: '1em',
  }),
  header: css({
    position: 'relative',
    cursor: 'pointer',
  }),
  detailClassName: css({
    padding: '1.125em',
  }),
  subTitle: css({
    position: 'absolute',
    '&.TOP': {
      background: 'url(/static/assets/img/top-badge.png) top left no-repeat',
      width: '8em',
      height: '8em',
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
    marginTop: '0.4em',
    '& a:hover': {
      textDecoration: 'none',
    },
    '& h5': {
      textAlign: 'left',
      cursor: 'pointer',
      color: `${variables.$listingItemTitleColor}`,
      fontSize: '1.15em !important',
      lineHeight: '1.375em',
      fontWeight: 'normal',
      margin: 0,
    },
    '@media(min-width: 768px)': {
      height: '3em',
    },
  }),
  address: css({
    marginTop: '1em',
    '& .SVGInline': {
      position: 'absolute',
      paddingTop: '0.25em',
    },
    '& span': {
      display: 'inline',
      paddingLeft: '0.5em',
      fontSize: '1.15em',
      color: `${variables.$listingItemTitleColor}`,
      fontWeight: 300,
    },
    '@media(min-width: 768px)': {
      height: '3em',
    },
  }),
  info: css({
    marginTop: '1em',
    '& div span': {
      fontWeight: 300,
      paddingLeft: '0.5em',
    },
    '@media(min-width: 768px)': {
      height: '1.5em',
    },
  }),
  inline: css({
    display: 'inline-block',
    paddingRight: '01em',
  }),

  price: css({
    float: 'right',
    color: `${variables.$priceColor}`,
    fontWeight: 'bold',
    fontSize: '1.375em',
    textTransform: 'uppercase',
    marginTop: '-0.25em',
  }),
  save: css({
    width: '100%',
    '& a': {
      display: 'inline-block',
      paddingLeft: '0.5em',
      textDecoration: 'none',
      color: `${variables.$listingItemTitleColor}`,
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: '1em',
    },
    '& a:hover': {
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
    margin: 'auto 1.125em',
    padding: '1.125em 0em',
  }),
  closeButton: css({
    color: 'red',
    fontSize: '1.3em',
    padding: '0.5em',
    cursor: 'pointer',
    height: '2em',
  }),
};
