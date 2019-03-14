import axios from 'axios';
import { GET_LATEST_NEWS } from '~/config/uri';

export function getLatestNewsApi() {
  return axios.get(GET_LATEST_NEWS);
}

export default getLatestNewsApi;
