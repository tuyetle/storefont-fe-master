import axios from 'axios';
import { HIGHLIGHT_PROPERTY } from '~/config/uri';

export function getHighlightProperyApi() {
  return axios.get(HIGHLIGHT_PROPERTY);
}

export default getHighlightProperyApi;
