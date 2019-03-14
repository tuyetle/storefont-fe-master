import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ResultItem from '~/components/LandingPageComponents/SearchArea/AutoSuggestionSearch/ResultItem/ResultItem';

describe('ResultItem', () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      imgSrc: 'logo.png',
      resultText: 'title',
      query: '',
    };
    component = (<ResultItem {...props} />);
  });

  it('should have image with proper src', () => {
    const sc = shallow(component);
    expect(sc.find('img').props().src).toEqual('logo.png');
  });

  it('should match snapshot', () => {
    const tree = renderer.create(component).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
