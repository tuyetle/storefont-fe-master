import axios from 'axios';
import DUMMY_THE_OTHER_FILTERS from '#/mockdata/TheOtherFilters';
import { SAVE_SEARCH } from '~/config/uri';

export function searchResultFormDataApi() {
  // TODO: call real API instead of mock data
  const p = new Promise((resolve) => {
    resolve({
      categories: DUMMY_THE_OTHER_FILTERS.categories,
      furnitures: DUMMY_THE_OTHER_FILTERS.furnitures,
      utilities: DUMMY_THE_OTHER_FILTERS.utilities,
    });
  });

  return p;
}
export function saveSearchApi(url) {
  return axios.post(SAVE_SEARCH, {
    params: {
      url,
    },
  });
}
export default { searchResultFormDataApi, saveSearchApi };
