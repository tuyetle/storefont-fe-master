import React from 'react';
import renderer from 'react-test-renderer';
import AreaRange from '~/components/SearchResultComponents/SearchBar/AreaRange/AreaRange';

describe('(Component) AreaRange', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      field: 'sample',
      fieldApi: {
        getFormState() {
          return {};
        },
        setError: () => {},
      },
      fromAreaDefaultValue: 0,
      toAreaDefaultValue: 0,
      t: () => { },
    };

    component = <AreaRange {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

