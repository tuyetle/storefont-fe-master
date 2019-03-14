import axios from 'axios';
import { GET_FACET_SEARCH } from '~/config/uri';

export function getFacetSearchApi() {
  return axios.get(GET_FACET_SEARCH);
}

export default getFacetSearchApi;
