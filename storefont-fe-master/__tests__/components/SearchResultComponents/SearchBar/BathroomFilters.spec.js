import React from 'react';
import renderer from 'react-test-renderer';
import BathroomFilters from '~/components/SearchResultComponents/SearchBar/BathroomFilters/BathroomFilters';

describe('(Component) BathroomFilters', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {
        setValue: () => { },
        setTouched: () => { },
      },
      bathroomOptions: [{
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      }],
    };

    component = <BathroomFilters {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

