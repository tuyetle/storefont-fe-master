import React from 'react';
import ForgotPasswordContent from '~/components/ForgotPasswordForm/ForgotPasswordContent/ForgotPasswordContent';
import renderer from 'react-test-renderer';

describe('(Component) ForgotPasswordContent', () => {
  let component;
  let props;
  let spyCallback;

  beforeEach(() => {
    props = {
      t(value) { return value; },
      formApi: { submitForm() {} },
    };
    spyCallback = jest.spyOn(props.formApi, 'submitForm');
    component = mount(<ForgotPasswordContent {...props} />);
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('should call submitForm when click submit', () => {
    const btn = component.find('input[type="submit"]');
    btn.simulate('submit');
    expect(spyCallback).toHaveBeenCalled();
  });
});
