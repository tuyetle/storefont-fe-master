import React from 'react';
import HeaderForgotPasswordForm from '~/components/ForgotPasswordForm/HeaderForgotPasswordForm/HeaderForgotPasswordForm';
import renderer from 'react-test-renderer';

describe('(Component) HeaderForgotPasswordForm', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
    };
    component = <HeaderForgotPasswordForm {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
