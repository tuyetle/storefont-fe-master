import React from 'react';
import renderer from 'react-test-renderer';
import BedFilters from '~/components/SearchResultComponents/SearchBar/BedFilters/BedFilters';

describe('(Component) BedFilters', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {
        setValue: () => { },
        setTouched: () => { },
      },
      bedOptionsConfig: [{
        value: 1,
        label: '1',
      },
      {
        value: 2,
        label: '2',
      }],
    };

    component = (<BedFilters {...props} />);
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

