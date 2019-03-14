import React from 'react';
import renderer from 'react-test-renderer';
import MobileSearchBar from '~/components/SearchResultComponents/SearchBar/MobileSearchBar/MobileSearchBar';

describe('(Component) MobileSearchBar', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      closeFilter() {},
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
      t() {},
      defaultValues: {
        transactionType: 'sell',
        priceRange: {
          fromPrice: 0,
          toPrice: 0,
        },
        areaRange: {
          fromArea: 0,
          toArea: 0,
        },
        bathrooms: [],
        beds: [],
        otherFilters: {},
      },
    };

    component = <MobileSearchBar {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

