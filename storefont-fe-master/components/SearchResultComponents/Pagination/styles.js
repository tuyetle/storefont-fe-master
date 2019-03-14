import { css } from 'glamor';

export default {
  container: css({
    '& .ant-pagination': {
      margin: 'auto',
      padding: '0',
    },
    '& .ant-pagination-prev': {
      '&:focus,&:hover': {
        borderColor: 'red',
        '& a': {
          color: 'red',
        },
      },
      '& a:after': {
        content: '<',
      },
    },
    '& .ant-pagination-next': {
      '&:focus,&:hover': {
        borderColor: 'red',
        '& a': {
          color: 'red',
        },
      },
      '& a:after': {
        content: '>',
      },
    },

    '& .ant-pagination-item-active': {
      background: 'red',
      borderColor: 'red',
      color: 'white',
      '&.ant-pagination-item&:hover': {
        '& a': {
          color: 'white',
        },
      },
    },
    '& .ant-pagination-item': {
      '&:hover': {
        borderColor: 'red',
        '& a': {
          color: 'red',
        },
      },
    },
  }),
};
