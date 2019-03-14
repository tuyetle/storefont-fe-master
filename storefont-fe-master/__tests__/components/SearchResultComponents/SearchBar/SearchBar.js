import React from 'react';
import renderer from 'react-test-renderer';
import SearchBar from '~/components/SearchResultComponents/SearchBar/SearchBar';

describe('(Component) SearchBar', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
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
      t() { },
      searchListing: () => {},
      saveSearch: () => {},
      getSuggestions: () => {},
      changeURL: () => { },
      suggestions: [],
      selectedFilter: {
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

    component = <SearchBar {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

