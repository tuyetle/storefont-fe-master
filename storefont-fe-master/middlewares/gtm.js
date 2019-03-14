import { createMiddleware } from 'redux-beacon';
import { GoogleTagManager } from 'redux-beacon/targets/google-tag-manager';
import { logger } from 'redux-beacon/extensions/logger';

const pageView = {
  eventFields: action => ({
    hitType: 'pageview',
    page: action.payload,
  }),
};

// Map the event to a Redux action
export const eventsMap = {
  LOCATION_CHANGE: pageView,
};

export default createMiddleware(eventsMap, GoogleTagManager(), { logger });
