import React from 'react';
import renderer from 'react-test-renderer';
import { SortBarBox } from '~/components/SearchResultComponents/SortBarBox/SortBarBox';

describe('(Component) SortBarBox', () => {
  let component;
  let props;
  let spyCallback;
  beforeEach(() => {
    props = {
      t(value) { return value; },
      onSortRusultChanged() {},
    };
    spyCallback = jest.spyOn(props, 'onSortRusultChanged');
    component = mount(<SortBarBox {...props} />);
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should call callback when select', () => {
    const dropdown = component.find('button');
    dropdown.first().simulate('click');
    expect(spyCallback).toHaveBeenCalled();
  });
});
