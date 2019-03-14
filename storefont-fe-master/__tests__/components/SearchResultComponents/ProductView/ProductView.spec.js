import React from 'react';
import renderer from 'react-test-renderer';
import { ProductView } from '~/components/SearchResultComponents/ProductView/ProductView';

describe('(Component) ProductView', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      listing: {
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
      },
      showMap: false,
      onListingSelected() { },
      onListingSaved() { },
      t(key) { return key; },
    };

    component = <ProductView {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
