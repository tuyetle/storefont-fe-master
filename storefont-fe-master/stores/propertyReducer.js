import Immutable from 'immutable';
import {
  GET_PROPERTY_DETAIL,
  GET_PROPERTY_DETAIL_COMPLETED,
  SAVE_LISTING_SUCCEEDED,
  POST_CONTACT_COMPLETED,
} from '~/actions/BusinessActionTypes';
import { SUCCESS_CODE } from '~/const/ResponseCode';

export const PROPERTY_STORE = 'propertyStore';
export const PROPERTY_ID = 'propertyId';
export const PROPERTY_DETAIL = 'propertyDetail';
export const POST_CONTACT_RESULT = 'postContactResult';

const propertyReducer = (state = Immutable.Map({}), action) => {
  switch (action.type) {
  case GET_PROPERTY_DETAIL:
    return state.set(PROPERTY_ID, action.payload);
  case GET_PROPERTY_DETAIL_COMPLETED:
    return state.set(PROPERTY_DETAIL, action.payload.data);
  case SAVE_LISTING_SUCCEEDED:
  {
    const property = state.get(PROPERTY_DETAIL);

    const suggestions = property.data.suggestions.map(item =>
      ((item.id === action.payload) ? { ...item, saved: !item.saved } : item));

    const result = { ...property, data: { ...property.data, suggestions } };

    return state.set(PROPERTY_DETAIL, result);
  }

  case POST_CONTACT_COMPLETED:
    return state.set(POST_CONTACT_RESULT, {
      statusCode: SUCCESS_CODE,
    });

  default:
    return state;
  }
};

export function getPropertyDetail(listingId = 1) {
  return { type: GET_PROPERTY_DETAIL, payload: listingId };
}

export default propertyReducer;
