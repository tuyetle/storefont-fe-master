import React from 'react';

export default {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => Component => props => <Component t={() => ''} {...props} />,
};
