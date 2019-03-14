import toJson from 'enzyme-to-json';
import { call, takeLatest } from 'redux-saga/effects';
import { getFacetSearchApi } from '~/services/apis/searchResult/facetSearchApi';
import watchGetFacetSearch, { getFacetSearch } from '~/services/sagas/searchResult/facetSearch';
import { GET_FACET_SEARCH } from '~/actions/BusinessActionTypes';

describe('facetSearch saga', () => {
  let action;

  it('watchGetFacetSearch should be waiting for GET_FACET_SEARCH and call getFacetSearch after GET_FACET_SEARCH is received', () => {
    const iterator = watchGetFacetSearch();
    const expectedYield = takeLatest(GET_FACET_SEARCH, getFacetSearch);
    const actualYield = iterator.next().value;

    expect(toJson(actualYield)).toEqual(toJson(expectedYield));
  });

  it('getFacetSearch should call getFacetSearchApi', () => {
    action = {
      type: GET_FACET_SEARCH,
      payload: {},
    };

    const expectedYield = call(getFacetSearchApi);
    const iterator = getFacetSearch(action);
    const actualYield = iterator.next().value;
    expect(toJson(actualYield)).toEqual(toJson(expectedYield));
  });
});
