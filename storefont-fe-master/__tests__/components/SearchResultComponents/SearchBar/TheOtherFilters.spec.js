import React from 'react';
import renderer from 'react-test-renderer';
import TheOtherFilters from '~/components/SearchResultComponents/SearchBar/TheOtherFilters/TheOtherFilters';

describe('(Component) TheOtherFilters', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {},
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
      t: () => {},
    };

    component = <TheOtherFilters {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

