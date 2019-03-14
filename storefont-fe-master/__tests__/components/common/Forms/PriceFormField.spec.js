import React from 'react';
import renderer from 'react-test-renderer';
import { PriceFormField } from '~/components/common/Forms/PriceFormField/PriceFormField';

describe('(Component) PriceFormField', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {
        setValue: () => { },
        setTouched: () => { },
      },
      billionLabelForUnit: 'TY',
      millionLabelForUnit: 'TR',
    };

    component = <PriceFormField {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

