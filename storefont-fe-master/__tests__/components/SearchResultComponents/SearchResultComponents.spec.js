import React from 'react';
import renderer from 'react-test-renderer';
import ViewOptions from '~/const/ViewOptions';
import SearchResultComponents from '~/components/SearchResultComponents/SearchResultComponents';

describe('(Component) SearchResultComponents', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      foundItems: 1,
      listings: [{
        id: 1,
        subTitle: 'TOP',
        title: 'Chung Cư Tây Hồ RiverView ',
        description: 'Căn hộ có thiết kế hiện đại và đa dạng',
        showImage: true,
        address: 'An Dương Vương,Phường Phú Thượng,Quận Tây Hồ',
        area: 189,
        bathRoom: 3,
        bedRoom: 4,
        price: 12340000000,
        saved: true,
        slug: 'abc-def-123',
        atrributes: {
          bedroom: '2',
          bathroom: '1',
          guestroom: '1',
        },
        center: {
          lat: '21.08772',
          lng: '105.80664',
        },
        img: 'http://www.muabannhadat.vn//uploads/images/005/663/592/hY-y969gzUyLyAIGAvxdRQ_853.jpg',
      }],
      listingsOfGroup: [],
      facetSearchItems: [],
      pageSize: 10,
      currentPage: 1,
      activeListing: {},
      showMap: false,
      onViewModeChanged() {},
      onMapViewModeChanged() {},
      onMarkerGroupListingClick() {},
      onPageChanged() {},
      onListingSelected() {},
      listingsMapResult: [],
      onListingSaved() {},
      onSortRusultChanged() {},
      onActiveListing() {},
      activeListingResults: {},
      viewMode: ViewOptions.Grid,
    };

    component = <SearchResultComponents {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
