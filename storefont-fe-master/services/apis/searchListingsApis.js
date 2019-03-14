import listings from '#/mockdata/Listings';
import { isString, has, includes } from 'lodash';
import axios from 'axios';

import { GET_LISTINGS_PREVIEW, GET_LISTINGS_OF_GROUP } from '~/config/uri';

// Bind conditions.
const buildQueryString = (conditions) => {
  const query = {};
  if (isString(conditions)) {
    return {
      value: conditions,
      entityType: 'freetext',
    };
  }

  if (has(conditions, 'searchKeyworks')) {
    query.keywords = conditions.searchKeyworks;
  }
  // Build with conditions for Price.
  if (has(conditions, 'priceRange')) {
    query.price = conditions.priceRange;
  }

  // Build with conditions for Beds.
  if (has(conditions, 'beds')) {
    const beds = conditions.beds;
    if (beds.length > 0) {
      query.bedrooms = beds;
    }
  }

  if (has(conditions, 'bathrooms')) {
    const bathrooms = conditions.bathrooms;
    if (bathrooms.length > 0) {
      query.bathrooms = bathrooms;
    }
  }

  // Build with conditions for Aria.
  if (has(conditions, 'areaRange')) {
    query.area = conditions.areaRange;
  }

  if (has(conditions, 'transactionType')) {
    query.transactionType = conditions.transactionType;
  }

  if (has(conditions, 'otherFilters')) {
    /* eslint prefer-destructuring: 0 */
    const otherFilters = conditions.otherFilters;

    // Build with conditions for Categories.
    if (has(otherFilters, 'categoryIds')) {
      query.categories = otherFilters.categoryIds;
    }
    // Build with conditions for direction.
    if (has(otherFilters, 'directions')) {
      query.directions = otherFilters.directions;
    }
    // Build with conditions for furniture.
    if (has(otherFilters, 'furnitures')) {
      query.furnitures = otherFilters.furnitures;
    }
    // Build with conditions for utility.
    if (has(otherFilters, 'utilities')) {
      query.utilities = otherFilters.utilities;
    }
  }

  return query;
};

// TODO This function just for demo only. It's should be remove.
function applyFilter(filterCondtions) {
  return listings.filter((item) => {
    let bedrooms = true;
    if (has(filterCondtions, 'bedrooms')) {
      bedrooms = includes(filterCondtions.bedrooms, item.bedRoom);
      if (includes(filterCondtions.bedrooms, 5)) {
        bedrooms = bedrooms || (item.attributes.bedRoom >= 5);
      }
      return bedrooms;
    }
    return bedrooms;
  });
}

export function searchListingApi(conditions, currentPage = 1, pageSize = 12) {
  // TODO: replace return mock data by issue an api
  const filter = buildQueryString(conditions);
  const results = applyFilter(filter);

  // TODO: Calling api
  let result = {};
  const foundItems = results.length;
  if (foundItems > 0) {
    result = results.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  }

  const p = new Promise((resolve) => {
    resolve({
      listings: result,
      foundItems,
    });
  });

  return p;
}

export function searchListingApiSearchMap(conditions) {
  const filter = buildQueryString(conditions);
  const results = applyFilter(filter);
  const listingsMapFoundItems = results.length;

  return new Promise((resolve) => {
    resolve({
      listingsMapResult: results,
      listingsMapFoundItems,
    });
  });
}

export function getListingsPreviewApi(id = '') {
  return axios.get(GET_LISTINGS_PREVIEW, {
    params: {
      id,
    },
  });
}

export function getListingsOfGroup(id = '') {
  return axios.get(GET_LISTINGS_OF_GROUP, {
    params: {
      id,
    },
  });
}

export default {
  searchListingApi,
  searchListingApiSearchMap,
  getListingsOfGroup,
};
