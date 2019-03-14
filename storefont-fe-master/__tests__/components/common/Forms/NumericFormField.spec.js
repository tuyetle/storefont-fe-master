import React from 'react';
import renderer from 'react-test-renderer';
import { NumericFormField } from '~/components/common/Forms/NumericFormField/NumericFormField';

describe('(Component) NumericFormField', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {
        setValue: () => {},
        setTouched: () => {},
      },
    };

    component = <NumericFormField {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

