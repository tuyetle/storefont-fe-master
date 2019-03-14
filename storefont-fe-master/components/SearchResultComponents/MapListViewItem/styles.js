import variables from '~/styles/variables';
import { css } from 'glamor';
import themes from '~/styles/themes';

export default {
  content: css({
    width: '100%',
    marginRight: '0',
    display: 'flex',
    background: 'white',
    boxShadow: `${variables.$boxShadowListView}`,
    marginTop: '1em',
    marginBottom: '1.250em',
    '@media (min-width: 768px)': {
      marginBottom: '1.875em',
    },
  }),
  info: css({
    width: 'calc(100% - 6.563em)',
    flexWrap: 'wrap',
    display: 'flex',
    '@media (min-width: 768px)': {
      width: 'calc(100% - 13.5em)',
      paddingLeft: '1.744em',
    },
  }),
  image: css({
    width: '100%',
    height: '10rem',
  }),
  saveListingText: css({
    display: 'none',
    '@media (min-width: 768px)': {
      display: 'inline',
    },
  }),
  utinityIcons: css({
    fontSize: '0.9rem',
  }),
  widthIcon: css({
    width: '1.2em',
    marginRight: '0.4em',
    fontSize: '0.9em',
  }),
  iconVAlign: css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(24%)',
    paddingBottom: '0.01em',
  }),
  title: css({
    color: `${variables.$listingItemTitleColor}`,
    ...themes['font-notoserif'],
    '&:hover': {
      color: `${variables.$listingItemTitleColor}`,
      textDecoration: 'none',
    },
    '& h4': {
      fontWeight: 'bold',
      fontSize: '0.875em',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      width: '100%',
      overflow: 'hidden',
      margin: '0',
      '@media (min-width: 768px)': {
        fontSize: '1em',
        whiteSpace: 'normal',
        textOverflow: 'inherit',
      },
    },
  }),
  description: css({
    fontSize: '0.688em',
    '@media (min-width: 768px)': {
      fontSize: '0.9em',
    },
  }),
  addressIcon: css({
    '@media (min-width: 768px)': {
      position: 'relative',
      top: '5%',
    },
  }),
  addressText: css({
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    display: 'inline-block',
    overflow: 'hidden',
    width: '100%',
    height: '1.5em',
    fontSize: '0.688em',
    '@media (min-width: 768px)': {
      display: 'inline',
      whiteSpace: 'normal',
      height: '3em',
      fontSize: '0.9em',
    },
  }),
  hearIcon: css({
    '@media (min-width: 768px)': {
      marginRight: '0.2em',
      transform: 'translateY(5%)',
    },
  }),
  saveListing: css({
    textAlign: 'right',
    fontSize: '0.875em',
    color: `${variables.$listingItemTitleColor}`,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    '&:hover': {
      color: `${variables.$listingItemTitleColor}`,
      textDecoration: 'none',
    },
    '@media (min-width: 768px)': {
      textAlign: 'center',
    },
  }),
  bath: css({
    display: 'inline-block',
  }),
  bedRoom: css({
    display: 'inline-block',
    marginRight: '0.813em',
    '@media (min-width: 768px)': {
      marginRight: '1.625em',
    },
  }),
  area: css({
    display: 'inline-block',
    marginRight: '1.253em',
    '@media (min-width: 768px)': {
      marginRight: '1.250em',
    },
  }),
  price: css({
    color: variables.$viewAllbuttonColor,
    fontSize: '0.875em',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    lineHeight: '1.5',
    alignItems: 'left',
    '@media (min-width: 768px)': {
      fontSize: '1.250em',
      alignItems: 'center',
      lineHeight: '2.5',
    },
  }),
  favorite: css({
    alignItems: 'right',
    '@media (min-width: 768px)': {
      alignItems: 'center',
    },
  }),
  middelBox: css({
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'column',
  }),
};
