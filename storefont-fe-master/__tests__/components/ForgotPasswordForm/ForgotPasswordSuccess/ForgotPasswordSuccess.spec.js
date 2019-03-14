import React from 'react';
import ForgotPasswordSuccess from '~/components/ForgotPasswordForm/ForgotPasswordSuccess/ForgotPasswordSuccess';
import renderer from 'react-test-renderer';

describe('(Component) ForgotPasswordSuccess', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      t(value) { return value; },
    };
    component = mount(<ForgotPasswordSuccess {...props} />);
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
