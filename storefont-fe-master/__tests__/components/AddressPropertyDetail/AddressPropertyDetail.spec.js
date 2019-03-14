import React from 'react';
import renderer from 'react-test-renderer';
import AddressPropertyDetail from '~/components/PropertyDetailComponents/HeaderPropertyDetail/AddressPropertyDetail/AddressPropertyDetail';

describe('(Component) AddressPropertyDetail', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      address: 'An Dương Vương, Phường Phú Thượng, Quận Tây Hồ',
      transactionType: 'Bán',
    };
    component = <AddressPropertyDetail {...props} />;
  });

  it('should renders correctly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

