import { createSelector } from 'reselect';
import { PROPERTY_STORE, PROPERTY_DETAIL, POST_CONTACT_RESULT } from '~/stores/propertyReducer';

const selectProperty = state => state.get(PROPERTY_STORE);

const makeSelectProperty = () => createSelector(
  selectProperty,
  (propertyState) => {
    const property = propertyState.get(PROPERTY_DETAIL);
    property.createdDate = new Date(property.createdDate);
    property.expiredDate = new Date(property.expiredDate);
    return property;
  },
);

const getPostContactResultSelector = () => createSelector(
  selectProperty,
  makeSelectProperty,
  state => state.get(POST_CONTACT_RESULT),
);

export {
  selectProperty,
  makeSelectProperty,
  getPostContactResultSelector,
};
