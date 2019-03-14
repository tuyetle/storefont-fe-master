import axios from 'axios';
import { HIGHLIGHT_PROJECT } from '~/config/uri';

export function getHighlightProjectApi() {
  return axios.get(HIGHLIGHT_PROJECT);
}

export default getHighlightProjectApi;
