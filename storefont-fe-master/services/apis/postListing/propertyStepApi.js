import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';

import projects from '#/mockdata/Projects';
import categories from '#/mockdata/Categories';
import subCategories from '#/mockdata/SubCategories';
import cities from '#/mockdata/Cities';
import districts from '#/mockdata/Districts';
import wards from '#/mockdata/Wards';

// Using mockdata
export function getPlInitDataApi() {
  const p = new Promise((resolve) => {
    resolve({
      projects: [],
      categories,
      cities,
    });
  });

  return p;
}

export function getProjectsByNameApi(searchTerms) {
  const query = searchTerms && searchTerms.toLowerCase();
  const project = projects.filter(c => c.name.toLowerCase().indexOf(query) >= 0);
  const p = new Promise((resolve) => {
    resolve(project);
  });

  return p;
}

export function getProjectByIdApi(projectId) {
  const project = projects.find(c => c.id === projectId);
  const p = new Promise((resolve) => {
    resolve(project);
  });

  return p;
}

export function getCategoryByIdApi(categoryId) {
  const category = categories.find(c => c.id === categoryId);
  const p = new Promise((resolve) => {
    resolve(category);
  });

  return p;
}

export function getSubCategoriesByCategoryIdApi(categoryId) {
  const p = new Promise((resolve) => {
    resolve(subCategories[categoryId]);
  });

  return p;
}

export function getCityByIdApi(cityId) {
  const city = cities.find(c => c.id === cityId);
  const p = new Promise((resolve) => {
    resolve(city);
  });

  return p;
}

export function getDistrictsByCityIdApi(cityId) {
  const dists = districts[cityId];
  const p = new Promise((resolve) => {
    resolve(dists);
  });

  return p;
}

export function getWardsByDistrictIdApi(districtId) {
  const wardList = wards[districtId];
  const p = new Promise((resolve) => {
    resolve(wardList);
  });

  return p;
}

export function savePropertyApi(property) {
  const p = new Promise((resolve) => {
    resolve({ status: 'success', property });
  });
  return p;
}

export function getLatLngByAddressApi(address) {
  const p = new Promise((resolve) => {
    geocodeByAddress(address)
      .then(results => (getLatLng(results[0])))
      .then(({ lat, lng }) => {
        resolve({ lat, lng });
      });
  });
  return p;
}

export default getPlInitDataApi;
