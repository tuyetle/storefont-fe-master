import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  container: css({
    position: 'relative',
    padding: '1em',
    zIndex: '2',
    width: '100%',
    '@media(min-width: 768px)': {
      width: '21.875em',
    },
  }),
  image: css({
    width: '100%',
    height: 'auto',
    '@media(min-width: 768px)': {
      height: '16.875em',
    },
  }),
  imageGridMap: css({
    '@media(min-width: 768px)': {
      height: '14.938em',
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
      maxWidth: '21.438em',
      height: '33em',
    },
  }),
  widthIcon: css({
    width: '1.2em',
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
  twoColumns: css({
    width: '44em',
    '& h5': {
      fontSize: '1.15em',
    },
    '& h6': {
      fontSize: '1em',
    },
  }),
  noPadding: css({
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
    marginTop: '0.4em',
    '& a:hover': {
      textDecoration: 'none',
    },
    '& h5': {
      textAlign: 'left',
      cursor: 'pointer',
      color: `${variables.$listingItemTitleColor}`,
      fontSize: '1.125em !important',
      lineHeight: '1.375em',
      fontWeight: 'normal',
      margin: 0,
    },
    '@media(min-width: 768px)': {
      height: '3em',
    },
  }),
  addressIcon: css({
    position: 'relative',
    top: '-25%',
  }),
  addressText: css({
    display: 'inline-block',
    width: 'calc(100% - 2em)',
    fontSize: '0.938em',
    color: `${variables.$listingItemTitleColor}`,
    fontWeight: 300,
  }),
  address: css({
    marginTop: '1em',
    display: 'flex',
    height: '1.5em',
    '& .SVGInline': {
      position: 'absolute',
      paddingTop: '0.25em',
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
    paddingRight: '0.3em',
  }),

  price: css({
    float: 'right',
    maxWidth: '4.875em',
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
