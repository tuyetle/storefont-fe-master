import React from 'react';
import renderer from 'react-test-renderer';
import SearchingTagComponent from '~/components/SearchResultComponents/SearchBar/SearchingTagComponent/SearchingTagComponent';

describe('(Component) SearchingTagComponent', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {},
      getSuggestions: () => {},
    };

    component = <SearchingTagComponent {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

