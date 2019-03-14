import { css } from 'glamor';
import variables from '~/styles/variables';

export default {

  wrapperHeader: css({
    textAlign: 'center',
    padding: '1em 0',
  }),

  wrapperAvatar: css({
    marginBottom: '0.5em',
  }),

  avarta: css({
    width: '5em',
    border: `1px solid ${variables.$borderFilter}`,
    boxShadow: variables.$boxShadowAvarta,
  }),

  iconLocation: css({
    display: 'inline-block',
    verticalAlign: 'middle',
  }),

  address: css({
    padding: '0 0.5em',
    color: variables.$colorContactLocation,
    fontSize: '0.8125em',
  }),

  name: css({
    color: 'darkslategrey',
    fontWeight: 'bold',
    padding: '0',
    margin: '0',
    fontSize: '0.9375em',
  }),

  company: css({
    color: 'darkslategrey',
    fontWeight: 'bold',
    fontSize: '0.8125em',
    padding: '0',
    margin: '0',
  }),

  viewmoreWrapper: css({
    marginTop: '0.5em',
  }),

  btnViewmore: css({
    background: 'none',
    border: '0',
    fontSize: '0.9375em',
    lineHeight: '0.9375em',
    color: variables.$commonRed,
    textTransform: 'uppercase',
    outline: 'none',
    cursor: 'pointer',

    '&:focus, &:active': {
      outline: 'none',
    },
  }),

  viewMoreIcon: css({
    marginRight: '0.3em',
    fill: variables.$commonRed,
  }),

};
