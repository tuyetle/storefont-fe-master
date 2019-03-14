import React from 'react';
import * as renderer from 'react-test-renderer';
import FloatingHeader from '~/components/PropertyDetailComponents/FloatingHeader/FloatingHeader';

describe('(Component) FloatingHeader', () => {
  let props;
  let component;

  beforeEach(() => {
    props = {
      address: 'An Dương Vương, Phường Phú Thượng, Quận Tây Hồ',
      transactionType: 'Bán',
      priceText: 150000,
      attributes: [
        {
          name: 'area', displayName: 'Diện tích', value: 65, addon: 'm2',
        },
        {
          name: 'bedrooms', displayName: 'Phòng ngủ', value: 3,
        },
        {
          name: 'bathrooms', displayName: 'Phòng tắm', value: 2,
        },
      ],
    };
    component = mount(<FloatingHeader {...props} />);
  });

  it('should renders correctly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

