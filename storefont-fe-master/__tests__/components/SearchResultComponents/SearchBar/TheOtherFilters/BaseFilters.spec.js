import React from 'react';
import renderer from 'react-test-renderer';
import BaseFilters from '~/components/SearchResultComponents/SearchBar/TheOtherFilters/BaseFilters';

describe('(Component) BaseFilters', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      onChange: () => {},
      categories: [{
        name: 'House',
        value: '1',
      }],
      furnitures: [{
        name: 'Sofa',
        value: '2',
      }],
      utilities: [{
        name: 'Wifi',
        value: '3',
      }],
      t: () => { },
    };

    component = <BaseFilters {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

