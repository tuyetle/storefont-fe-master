import Immutable from 'immutable';
import { put, call, takeEvery } from 'redux-saga/effects';
import {
  getPlInitDataApi,
  getProjectsByNameApi,
  getProjectByIdApi,
  getCategoryByIdApi,
  getDistrictsByCityIdApi,
  getWardsByDistrictIdApi,
  getSubCategoriesByCategoryIdApi,
  savePropertyApi,
  getLatLngByAddressApi,
} from '~/services/apis/postListing/propertyStepApi';
import {
  GET_PL_INIT_DATA,
  GET_PL_INIT_DATA_COMPLETED,
  SEARCH_PROJECTS,
  SEARCH_PROJECTS_COMPLETED,
  GET_PROJECT_BY_ID,
  GET_PROJECT_BY_ID_COMPLETED,
  SELECT_CATEGORY_BY_ID,
  SELECT_CATEGORY_BY_ID_COMPLETED,
  GET_SUB_CATEGORIES_BY_CATEGORY_ID,
  GET_SUB_CATEGORIES_BY_CATEGORY_ID_COMPLETED,
  SELECT_CITY_BY_ID,
  SELECT_CITY_BY_ID_COMPLETED,
  SELECT_DISTRICT_BY_ID,
  SELECT_DISTRICT_BY_ID_COMPLETED,
  GET_LAT_LNG_BY_ADDRESS,
  GET_LAT_LNG_BY_ADDRESS_COMPLETED,
  APPLY_PROJECT_TEMPLATE,
  CATEGORY_CHANGED,
  CITY_CHANGED,
  DISTRICT_CHANGED,
  SAVE_PROPERTY,
  SAVE_PROPERTY_COMPLETED,
} from '~/actions/BusinessActionTypes';

function* getPlInitData() {
  const returnedData = yield call(getPlInitDataApi);

  yield put({
    type: GET_PL_INIT_DATA_COMPLETED,
    payload: returnedData,
  });
}
export function* watchGetPlInitData() {
  yield takeEvery(GET_PL_INIT_DATA, getPlInitData);
}

function* getProjectById(action) {
  const projectId = action.payload;
  const project = yield call(getProjectByIdApi, projectId);
  let category = yield call(getCategoryByIdApi, project.category.categoryId);
  if (!category) category = { id: '' };

  const subCategories = yield call(getSubCategoriesByCategoryIdApi, project.category.categoryId);
  const districts = yield call(getDistrictsByCityIdApi, project.geo.cityId);
  const wards = yield call(getWardsByDistrictIdApi, project.geo.districtId);

  let pictures = [];
  if (project.pictures && project.pictures.length > 0) {
    pictures = project.pictures.map(p => ({
      fileKey: p.id,
      name: p.name,
      size: p.size,
      default: p.default,
      thumbnail: p.originalFile,
    }));
  }

  yield put({
    type: APPLY_PROJECT_TEMPLATE,
    payload: {
      values: Immutable.Map({
        projectId,
        category: {
          categoryId: project.category.categoryId,
          subCategoryId: project.category.subCategoryId,
          attributeValues: project.category.attributeValues,
        },
        geo: {
          cityId: project.geo.cityId,
          districtId: project.geo.districtId,
          wardId: project.geo.wardId,
          googleAddress: project.geo.googleAddress,
        },
        pictures,
      }),
    },
  });

  yield put({
    type: GET_PROJECT_BY_ID_COMPLETED,
    payload: {
      category,
      subCategories,
      districts,
      wards,
    },
  });
}
export function* watchGetProjectById() {
  yield takeEvery(GET_PROJECT_BY_ID, getProjectById);
}

function* searchProjects(action) {
  const searchTerms = action.payload;
  const projects = yield call(getProjectsByNameApi, searchTerms);

  yield put({
    type: SEARCH_PROJECTS_COMPLETED,
    payload: {
      projects,
    },
  });
}
export function* watchSearchProjects() {
  yield takeEvery(SEARCH_PROJECTS, searchProjects);
}

function* selectCategoryById(action) {
  const categoryId = action.payload;

  if (categoryId) {
    const category = yield call(getCategoryByIdApi, categoryId);
    const subCategories = yield call(getSubCategoriesByCategoryIdApi, category.id);

    yield put({
      type: CATEGORY_CHANGED,
      payload: {
        category,
      },
    });
    yield put({
      type: SELECT_CATEGORY_BY_ID_COMPLETED,
      payload: {
        category,
        subCategories,
      },
    });
  } else {
    yield put({
      type: CATEGORY_CHANGED,
      payload: null,
    });
    yield put({
      type: SELECT_CATEGORY_BY_ID_COMPLETED,
      payload: {
        category: {},
        subCategories: [],
      },
    });
  }
}
export function* watchSelectCategoryById() {
  yield takeEvery(SELECT_CATEGORY_BY_ID, selectCategoryById);
}

export function* getSubCategoriesByCategoryId(action) {
  const categoryId = action.payload;
  const subCategories = yield call(getSubCategoriesByCategoryIdApi, categoryId);
  yield put({
    type: GET_SUB_CATEGORIES_BY_CATEGORY_ID_COMPLETED,
    payload: {
      subCategories,
    },
  });
}

export function* watchGetSubCategoriesByCategoryId() {
  yield takeEvery(GET_SUB_CATEGORIES_BY_CATEGORY_ID, getSubCategoriesByCategoryId);
}

export function* selectCityById(action) {
  const cityId = action.payload;

  if (cityId) {
    const districts = yield call(getDistrictsByCityIdApi, cityId);

    yield put({
      type: CITY_CHANGED,
      payload: {
        cityId,
      },
    });
    yield put({
      type: SELECT_CITY_BY_ID_COMPLETED,
      payload: {
        districts,
      },
    });
  } else {
    yield put({
      type: CITY_CHANGED,
      payload: null,
    });
    yield put({
      type: SELECT_CITY_BY_ID_COMPLETED,
      payload: {
        districts: [],
      },
    });
  }
}

export function* watchSelectCityById() {
  yield takeEvery(SELECT_CITY_BY_ID, selectCityById);
}

export function* selectDistrictById(action) {
  const districtId = action.payload;

  if (districtId) {
    const wards = yield call(getWardsByDistrictIdApi, districtId);

    yield put({
      type: DISTRICT_CHANGED,
      payload: {
        districtId,
      },
    });
    yield put({
      type: SELECT_DISTRICT_BY_ID_COMPLETED,
      payload: {
        wards,
      },
    });
  } else {
    yield put({
      type: DISTRICT_CHANGED,
      payload: null,
    });
    yield put({
      type: SELECT_DISTRICT_BY_ID_COMPLETED,
      payload: {
        wards: [],
      },
    });
  }
}

export function* watchSelectDistrictById() {
  yield takeEvery(SELECT_DISTRICT_BY_ID, selectDistrictById);
}

export function* getLatLngByAddress(action) {
  const latLng = yield call(getLatLngByAddressApi, action.payload);

  yield put({
    type: GET_LAT_LNG_BY_ADDRESS_COMPLETED,
    payload: {
      address: action.payload,
      marker: latLng,
    },
  });
}

export function* watchGetLatLngByAddress() {
  yield takeEvery(GET_LAT_LNG_BY_ADDRESS, getLatLngByAddress);
}

export function* saveProperty(action) {
  const result = yield call(savePropertyApi, action.payload);

  yield put({
    type: SAVE_PROPERTY_COMPLETED,
    payload: {
      property: result.property,
    },
  });
}

export function* watchSaveProperty() {
  yield takeEvery(SAVE_PROPERTY, saveProperty);
}
