import { css } from 'glamor';
import variables from '~/styles/variables';
import themes from '~/styles/themes';

const iconArrow = {
  border: `solid ${variables.$commonRed}`,
  borderWidth: '0 1px 1px 0',
  display: 'inline-block',
  padding: '0.3125em',
};

export default {
  floatingPropertyDetail: css({
    boxShadow: variables.$boxShadowBottomFloating,
    padding: '1.2em 0 0.1875em',
  }),

  wrapper: css({
    '& .priceLabel': {
      display: 'inline-block',
      textTransform: 'uppercase',
      verticalAlign: 'middle',
      '& div': {
        fontSize: '1.5625em',
      },
    },
  }),

  attributeList: css({
    display: 'inline-block',
    paddingLeft: '2.125em',
  }),

  attributeValue: css({
    fontSize: '0.9375em',
  }),

  inline: css({
    display: 'inline-block',
    paddingRight: '1.9em',

    '& label': {
      opacity: 1,

      '& span': {
        boxShadow: 'none',
      },
    },

    '& span': {
      display: 'inline-block',
      fontSize: '0.9375em',
      marginLeft: '0.125em',
    },
  }),

  widthIcon: css({
    '& span': {
      width: '1.2em',
      height: '1.2em',
      lineHeight: '1.2em',
      verticalAlign: 'middle',
      display: 'inline-block',
      marginRight: '0.8em',

      '&:nth-child(2)': {
        display: 'none',
      },
    },
  }),

  saveWrap: css({
    ...themes['font-montserrat-medium'],
    display: 'inline-block',
    verticalAlign: 'top',
    marginTop: '0.6em',

    '& .btn.btn-link': {
      textDecoration: 'none',
      color: `${variables.$listingItemTitleColor}`,
      fontWeight: 400,
      textTransform: 'uppercase',
      fontSize: '1em',
      lineHeight: '1em',
    },
    '& .btn.btn-link:hover': {
      textDecoration: 'none',
      color: `${variables.$listingItemTitleColor}`,
    },
    '& svg': {
      float: 'left',
    },
    '& span': {
      display: 'inline-block',
      paddingLeft: '0.5em',
    },
    hearIcon: {
      position: 'relative',
      top: '0.3em',
    },
  }),

  submitButtonContainer: css({
    display: 'inline-block',
    marginLeft: '2.5em',
  }),

  btnRequest: css({
    ...themes['button-red'],
    ...themes['font-montserrat-medium'],
  }),

  iconSend: css({
    marginRight: '0.1875em',
  }),

  openForm: css({
    textAlign: 'center',
    marginTop: '-2px',
  }),

  iconOpenDown: css({
    ...iconArrow,
    transform: 'rotate(45deg)',
    WebkitTransform: 'rotate(45deg)',
  }),
};

