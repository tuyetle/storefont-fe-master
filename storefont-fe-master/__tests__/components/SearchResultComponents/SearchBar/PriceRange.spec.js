import React from 'react';
import renderer from 'react-test-renderer';
import PriceRange from '~/components/SearchResultComponents/SearchBar/PriceRange/PriceRange';

describe('(Component) PriceRange', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      field: 'sample',
      fieldApi: {
        getFormState() {
          return {};
        },
        setError: () => { },
      },
      billionLabelForUnit: 'TY',
      millionLabelForUnit: 'TR',
      t: () => { },
    };

    component = <PriceRange {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

