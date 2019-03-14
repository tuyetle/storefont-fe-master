export const MAX_LENGTH_DESCRIPTION = 4000;
export const MAX_LENGTH_SHORT_DESCRIPTION = 150;
export const MAX_LENGTH_TITLE_LISTING = 70;
export const MAX_LENGTH_PRICE = 10;
export const PAGE_SIZE = 20;
export const NUMBER_OF_LINES_WILL_SHOW_BY_DEFAULT = 3;
export const HIDDEN_PHONE_NUMBER = 'XXXX-XXX-XXX';
export const CAROUSEL_SPEED = 3000;
export const CAROUSEL_GALLARY_SPEED = 1000;
export const RESUBMIT_TIMEOUT_SIGNUP = 59;
export const TIMEOUT_SIGNUP = 1000;
export const EXPIRED_TIME_COOKIE = 1440;
export const REMEMBER_ME_EXPIRED_TIME_COOKIE = 525600;
export const RECAPTCHA_KEY = `${process.env.RECAPTCHA_KEY}`;
export const TRANSACTIONAL_TYPE_OPTIONS = [{
  value: '0',
  label: 'buy',
},
{
  value: '1',
  label: 'rent',
}];
export const DIRECTION_FILTER_OPTIONS = [
  { name: 'east' },
  { name: 'west' },
  { name: 'south' },
  { name: 'north' },
  { name: 'northEast' },
  { name: 'northWest' },
  { name: 'southEast' },
  { name: 'southWest' },
];
export const BATHROOM_FILTER_OPTIONS = [
  { name: 'all', value: -1 },
  { name: '1+', value: 2 },
  { name: '2+', value: 3 },
  { name: '3+', value: 4 },
  { name: '4+', value: 5 },
  { name: '5+', value: 6 },
];
export const SORT_RUSULT_OPTIONS = [
  { name: 'oldToNew' },
  { name: 'newToOld' },
  { name: 'lowToHighPrice' },
  { name: 'highToLowPrice' },
];
export const LANDING_PAGE_SECTION_TYPES = [
  { value: '0', label: 'featured' },
  { value: '1', label: 'new' },
];
