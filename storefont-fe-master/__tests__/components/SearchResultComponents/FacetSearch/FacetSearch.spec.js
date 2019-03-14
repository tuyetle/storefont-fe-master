import React from 'react';
import MTFilterForm from '~/components/SearchResultComponents/FacetSearch/FacetSearch';
import renderer from 'react-test-renderer';

describe('(Component) MTFilterForm', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      items: [],
      onSelectFacetSearchItem() {},
    };
    component = <MTFilterForm {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
