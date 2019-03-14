import { css } from 'glamor';
import variables from '~/styles/variables';
import themes from '~/styles/themes';

export default {
  wrapperForm: css({
    '& form': {
      marginTop: '0.5em',
      '& .form-control': {
        fontSize: '0.875em',
        fontStyle: 'italic',
        border: `1px solid ${variables.$locationTextColor}`,
        borderRadius: '0',
        outline: 'none',

        '&:focus': {
          boxShadow: 'none',
        },
      },

      '& textarea': {
        resize: 'none',
      },
    },
  }),

  wrapperSubmitBtn: css({
    textAlign: 'center',
    ' button': {
      marginBottom: '1em',
    },
  }),

  btnRequest: css({
    width: '100%',
    ...themes['button-red'],
    ...themes['font-montserrat-medium'],
  }),

  iconSend: css({
    marginRight: '0.5em',
  }),

  submitButton: css({
    width: '100%',
    ...themes['button-red'],
    ...themes['font-montserrat-medium'],
  }),
  sent: css({
    cursor: 'default',
  }),
  disableSubmitButton: css({
    width: '100%',
    ...themes['button-red'],
    ...themes['font-montserrat-medium'],
    opacity: '0.65',
  }),
};
