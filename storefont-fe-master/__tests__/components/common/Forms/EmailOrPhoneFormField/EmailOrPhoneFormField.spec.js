
import React from 'react';
import EmailOrPhoneFormField from '~/components/common/Forms/EmailOrPhoneFormField/EmailOrPhoneFormField';
import renderer from 'react-test-renderer';

describe('(Component) EmailOrPhoneFormField', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      className: 'test',
      errorClass: 'error',
      t: value => value,
      fieldApi: {
        setError() {},
        setValue() {},
      },
    };
    component = <EmailOrPhoneFormField {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
