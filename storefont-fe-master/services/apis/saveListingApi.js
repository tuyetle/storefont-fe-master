import axios from 'axios';
import { SAVE_LISTING_URI } from '~/config/uri';

export default function saveListingApi(listingId) {
  return axios.post(SAVE_LISTING_URI, {
    listingId,
  });
}
