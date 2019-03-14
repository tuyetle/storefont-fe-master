export const LOGIN_REQUEST = 'loginRequest';
export const LOGIN_REQUEST_FAILED = 'loginRequestFailed';
export const AUTHENTICATION_REQUEST = 'authenticationRequest';
export const AUTHENTICATION_REQUEST_COMPLETED = 'authenticationRequestCompleted';
export const LOGOUT_REQUEST = 'logoutRequest';
export const REGISTRATION_REQUEST = 'registrationRequest';
export const REGISTRATION_REQUEST_SUCCEEDED = 'registrationRequestSucceeded';
export const REGISTRATION_REQUEST_FAILED = 'registrationRequestFailed';
export const SET_AUTH = 'setAuth';
export const TOKEN = 'token';
export const NAME = 'name';
export const REMEMBER_ME = 'rememberMe';
export const CLEAR_AUTH = 'clearAuth';
export const LOCATION_CHANGE = 'locationChanged';
export const LOCATION_REDIRECT_TO_HOMEPAGE = 'locationRedirectToHomepage';

// Listing Step
export const POST_PL_LISTING = 'postPlListing';
export const POST_PL_LISTING_COMPLETED = 'postPlListingCompleted';
export const PL_COMPLETED_INFO_STEP = 'plCompletedInfoStep';
export const PL_COMPLETED_PAYMENT_STEP = 'plCompletedPaymentStep';
export const GET_PL_INIT_DATA = 'getPlInitData';
export const PL_INIT_DATA_COMPLETED = 'plInitDataCompleted';

// Payment Step
export const GET_PRODUCT_PACKAGE_LIST = 'getProductPackageList';
export const PL_GET_PRODUCT_PACKAGE_LIST = 'plGetProductPackageList';
export const POST_PAYMENT_STEP = 'postPaymentStep';
export const PL_POST_PAYMENT_STEP = 'plPostPaymentStep';

// Property Step
export const GET_PL_INIT_DATA_COMPLETED = 'plInitDataCompleted';
export const SELECT_CATEGORY_BY_ID = 'selectCategoryById';
export const SELECT_CATEGORY_BY_ID_COMPLETED = 'selectCategoryByIdCompleted';
export const SELECT_CITY_BY_ID = 'selectCityById';
export const SELECT_CITY_BY_ID_COMPLETED = 'selectCityByIdCompleted';
export const SELECT_DISTRICT_BY_ID = 'selectDistrictById';
export const SELECT_DISTRICT_BY_ID_COMPLETED = 'selectDistrictByIdCompleted';
export const GET_SUB_CATEGORIES_BY_CATEGORY_ID = 'getSubCategoriesByCategoryId';
export const GET_SUB_CATEGORIES_BY_CATEGORY_ID_COMPLETED = 'getSubCategoriesByCategoryIdCompleted';
export const GET_PROJECT_BY_ID = 'getProjectById';
export const GET_PROJECT_BY_ID_COMPLETED = 'getProjectByIdCompleted';
export const SEARCH_PROJECTS = 'searchProjects';
export const SEARCH_PROJECTS_COMPLETED = 'searchProjectsCompleted';
export const GET_CATEGORY_BY_ID = 'getCategoryById';
export const GET_CATEGORY_BY_ID_COMPLETED = 'getCategoryByIdCompleted';
export const GET_LAT_LNG_BY_ADDRESS = 'getLatLngByAddress';
export const GET_LAT_LNG_BY_ADDRESS_COMPLETED = 'getLatLngByAddressCompleted';
export const APPLY_PROJECT_TEMPLATE = 'applyProjectTemplate';
export const CATEGORY_CHANGED = 'categoryChanged';
export const CITY_CHANGED = 'cityChanged';
export const DISTRICT_CHANGED = 'districtChanged';
export const SAVE_PROPERTY = 'saveProperty';
export const SAVE_PROPERTY_COMPLETED = 'savePropertyCompleted';

// search result
export const SEARCH_LISTINGS = 'searchListings';
export const SEARCH_LISTINGS_SUCCEEDED = 'searchListingSucceeded';
export const SEARCH_LISTING_MAP = 'searchListingsMap';
export const SEARCH_LISTING_MAP_RESULTS = 'searchListingsMapResult';
export const SHOW_LISTING_MAP_RESULTS = 'showListingMapResult';
export const SEARCH_LISTING_SUBMIT = 'searchListingSubmit';

// Post contact in Property detail
export const POST_CONTACT = 'postContact';
export const POST_CONTACT_COMPLETED = 'postContactCompleted';
export const POST_CONTACT_FAILED = 'postContactFailed';
// Get the listing is active on map / search result.
export const SEARCH_ACTIVE_LISTING = 'searchActiveListing';
export const SHOW_ACTIVE_LISTING_RESULTS = 'showActiveListingResult';

// Get the property
export const GET_PROPERTY_DETAIL = 'getPropertyDetail';
export const GET_PROPERTY_DETAIL_COMPLETED = 'getPropertyDetailCompleted';

// Get Suggestion
export const GET_SUGGESTION = 'getSuggestion';
export const GET_SUGGESTION_COMPLETED = 'getSuggestionCompleted';
export const RESET_SUGGESTION = 'resetSuggestion';

// Search Listing Form.
export const SEARCH_LISTING_FORM_DATA_BINDING = 'getSearchListingFormDataBinding';
export const SEARCH_LISTING_FORM_DATA_BINDING_COMPLETED = 'getSearchListingFormDataBindingCompleted';

// Landing Page
export const GET_LATEST_NEWS = 'getLatestNews';
export const GET_LATEST_NEWS_COMPLETED = 'getLatestNewsCompleted';

// Highlight Real Estates
export const GET_HIGHLIGHT_PROPERTIES = 'getHighLightProperties';
export const GET_HIGHLIGHT_PROPERTIES_SUCCEEDED = 'getHighLightPropertiesSucceeded';
export const GET_HIGHLIGHT_PROPERTIES_FAILED = 'getHighLightPropertiesFailed';

// Highlight Projects
export const GET_HIGHLIGHT_PROJECTS = 'getHighlightProjects';
export const GET_HIGHLIGHT_PROJECTS_SUCCEEDED = 'getHighlightProjectsSucceeded';
export const GET_HIGHLIGHT_PROJECTS_FAILED = 'getHighlightProjectsFailed';

export const GET_SEO_LINKS = 'getSeoLinks';
export const GET_SEO_LINKS_COMPLETED = 'getSeoLinksCompleted';

// Search Listing Form.
export const SAVE_LISTING = 'saveListing';
export const SAVE_LISTING_SUCCEEDED = 'saveListingCompleted';
export const SAVE_LISTING_FAILED = 'saveListingFailed';
// forget password
export const FORGET_PASSWORD = 'forgetPassword';
export const FORGET_PASSWORD_SUCCEEDED = 'forgetPasswordSucceeded';
export const FORGET_PASSWORD_FAILED = 'forgetPasswordFailed';
// update password
export const UPDATE_PASSWORD = 'updatePassword';
export const UPDATE_PASSWORD_SUCCEEDED = 'updatePasswordSucceeded';
export const CHECK_FORGET_PASSWORD_TOKEN = 'checkForgetPasswordToken';
export const CHECK_FORGET_PASSWORD_TOKEN_SUCCEEDED = 'checkForgetPasswordTokenSucceeded';

export const SAVE_SEARCH = 'saveSearch';
export const SAVE_SEARCH_SUCCEEDED = 'saveSearchSucceeded';

export const SET_SEARCHING_CONDITIONS = 'setSearchingConditions';

export const GET_LISTINGS_OF_A_GROUP = 'getListingsOfGroup';
export const GET_LISTINGS_OF_A_GROUP_SUCCEEDED = 'getListingsOfGroupSucceeded';

export const GET_FACET_SEARCH = 'getFacetSearch';
export const GET_FACET_SEARCH_SUCCEEDED = 'getFacetSearchSucceeded';
export const GET_FACET_SEARCH_FAILED = 'getFacetSearchFailed';

export const GET_MY_PROFILE = 'getMyProfile';
export const GET_MY_PROFILE_SUCCEEDED = 'getMyProfileSucceeded';
export const GET_MY_PROFILE_FAILED = 'getMyProfileFailed';

export const CHECK_AUTH = 'checkAuth';
export const CHECK_AUTH_SUCCEEDED = 'checkAuthSucceeded';
export const CHECK_AUTH_FAILED = 'checkAuthFailed';
