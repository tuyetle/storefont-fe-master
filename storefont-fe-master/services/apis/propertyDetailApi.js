// import axios from 'axios';
import property from '#/mockdata/Property';

// Using mockdata
export function getPropertyDetailApi(/* listingId* */) {
  // TODO: call real API instead of return a mock data
  const p = new Promise((resolve) => {
    resolve({
      data: property,
    });
  });

  return p;
}

export default getPropertyDetailApi;
