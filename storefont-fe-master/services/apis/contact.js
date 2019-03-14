import axios from 'axios';
import { POST_CONTACT_URI } from '~/config/uri';

export function postContactApi(data) {
  // TODO: do something after call api payment for listing
  return axios.post(POST_CONTACT_URI, data);
}

export default postContactApi;
