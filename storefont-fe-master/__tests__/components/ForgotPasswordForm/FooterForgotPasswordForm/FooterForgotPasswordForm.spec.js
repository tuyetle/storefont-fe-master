import React from 'react';
import FooterForgotPasswordForm from '~/components/ForgotPasswordForm/FooterForgotPasswordForm/FooterForgotPasswordForm';
import renderer from 'react-test-renderer';

describe('(Component) FooterForgotPasswordForm', () => {
  let component;
  let props;
  let spyCallback;

  beforeEach(() => {
    props = {
      t(value) { return value; },
      showModal() {},
    };
    spyCallback = jest.spyOn(props, 'showModal');
    component = mount(<FooterForgotPasswordForm {...props} />);
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should call callback when select', () => {
    const btn = component.find('button');
    btn.simulate('click');
    expect(spyCallback).toHaveBeenCalled();
  });
});
