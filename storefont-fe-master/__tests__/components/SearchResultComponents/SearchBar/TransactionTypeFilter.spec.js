import React from 'react';
import renderer from 'react-test-renderer';
import TransactionTypeFilter from '~/components/SearchResultComponents/SearchBar/TransactionTypeFilter/TransactionTypeFilter';

describe('(Component) TransactionTypeFilter', () => {
  let component;
  let props;
  beforeEach(() => {
    props = {
      fieldApi: {},
    };

    component = <TransactionTypeFilter {...props} />;
  });

  it('should render conrectly', () => {
    const tree = renderer.create(component).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

