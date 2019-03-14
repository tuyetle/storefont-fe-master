import axios from 'axios';
import { GET_SEO_LINKS } from '~/config/uri';

export function getSeoLinksApi() {
  return axios.get(GET_SEO_LINKS);
}

export default getSeoLinksApi;
