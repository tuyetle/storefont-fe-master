import axios from 'axios';
import { POST_PL_LISTING_URI } from '~/config/uri';

export function postListingStepApi(data) {
  // TODO: do something after call api payment for listing
  return axios.post(POST_PL_LISTING_URI, data);
}

export default postListingStepApi;
