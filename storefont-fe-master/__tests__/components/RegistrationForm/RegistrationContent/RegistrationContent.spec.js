import React from 'react';
import RegistrationContent from '~/components/RegistrationForm/RegistrationContent/RegistrationContent';
import renderer from 'react-test-renderer';

describe('(Component) RegistrationContent', () => {
  let component;
  let props;
  let spyCallback;

  beforeEach(() => {
    props = {
      t: value => value,
      formApi: { submitForm() {} },
      status: null,
    };
    spyCallback = jest.spyOn(props.formApi, 'submitForm');
    component = mount(<RegistrationContent {...props} />);
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
