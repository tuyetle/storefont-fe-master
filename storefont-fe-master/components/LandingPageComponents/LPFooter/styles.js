import variables from '~/styles/variables';
import { css } from 'glamor';

export default {
  footer: css({
    background: variables.$footerBgColor,
    color: variables.$footerLinkTextColor,
    padding: '1em 0',
    fontWeight: '300',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: '0.019em',
    borderTop: `1px solid ${variables.$footerCopyrightTextColor}`,
    '& p': {
      marginBottom: '0',
      fontSize: '0.563em',
      color: variables.$footerCopyrightTextColor,
      lineHeight: '2',
    },

    '@media (min-width: 768px)': {
      padding: '3em 0',
    },
  }),
  item: css({
    margin: '0 0.5em',
    '& a': {
      color: variables.$footerLinkTextColor,
      textDecoration: 'none',
      fontSize: '0.8125em',
      display: 'block',
      '&:hover': {
        color: variables.$footerLinkTextColor,
      },

      '@media (min-width: 768px)': {
        fontSize: '.8em',
        display: 'inline-block',
      },
    },
  }),
  links: css({
    display: 'block',
    textAlign: 'center',
    marginBottom: '1.938em',

    '& .d-none': {
      '@media (min-width: 768px)': {
        display: 'inline-block!important',
      },
    },
  }),
  wraper: css({
    position: 'relative',
    display: 'inline-block',
    marginLeft: '1em',
  }),
  socialIcons: css({
    marginTop: '1.2em',
    marginBottom: '1em',
  }),
  cicle: css({
    position: 'relative',
    top: '0',
    left: '0',
    color: 'white',
    fontSize: '2.2em',
  }),
  socialIcon: css({
    position: 'absolute',
    color: 'white',
    fontSize: 'initial',
  }),
  fb: css({
    left: '0.6em',
    top: '0.6em',
  }),
  gp: css({
    left: '0.5em',
    top: '0.6em',
  }),
  in: css({
    left: '0.5em',
    top: '0.6em',
  }),
  ringerLogo: css({
    marginLeft: '1.188em',
  }),
};
