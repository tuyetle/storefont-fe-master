import { css } from 'glamor';
import variables from '~/styles/variables';
import themes from '~/styles/themes';

export default {
  wrapperPhoneNumber: css({
    '& .react-card-front': {
      position: 'relative !important',
    },
  }),

  front: css({
    padding: '0.5em',
  }),

  back: css({
  }),

  phoneNumber: css({
    textAlign: 'center',
    fontWeight: '500',
    fontSize: '1.125em',
    color: 'red',
    fill: 'white',
    cursor: 'pointer',
    ...themes['button-red'],
    ...themes['font-montserrat-medium'],

    '& span': {
      padding: '0.25em 0.5em',
    },

    '& a': {
      width: '100%',
      height: '100%',
      display: 'block',
      color: 'white',

      '&:hover': {
        textDecoration: 'none',
        '& span': {
          color: 'white',
        },
      },
    },
  }),

  showPhoneBtn: css({
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: '0',
    left: '0',

    '&:focus': {
      outline: 'none',
    },
  }),

  PhoneIcon: css({
    display: 'inline-block',
    verticalAlign: 'middle',
    marginTop: '-0.2em',
  }),

};
