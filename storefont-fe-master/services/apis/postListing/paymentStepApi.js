import axios from 'axios';
import { POST_PAYMENT_LISTING } from '~/config/uri';
import products from '#/mockdata/Products';

export function getProductPackageApi() {
  // TODO: call real API instead of mock data
  const p = new Promise((resolve) => {
    resolve({
      data: products,
    });
  });

  return p;
}

export function postPaymentStepApi(data) {
  // TODO: do something after call api payment for listing
  return axios.post(POST_PAYMENT_LISTING, data);
}

export default getProductPackageApi;
