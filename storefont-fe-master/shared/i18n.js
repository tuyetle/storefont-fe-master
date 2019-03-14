const i18n = require('i18next');
const XHR = require('i18next-xhr-backend');
// Load numeral config
// import moment from 'moment';
const numeral = require('numeral');
require('numeral/locales/vi');
// import 'numeral/locales/en-gb';
const { upperCase } = require('lodash');

const { PRICE_FORMAT_TYPE, MONEY_FORMAT_TYPE } = require('./config/localization.es5');
const { formatDate, formatPrice } = require('./services/formats.es5');

// TODO need to refactor.
numeral.locale('vi');

const options = {
  fallbackLng: 'vi',
  load: 'languageOnly', // we only provide en, de -> no region specific locals like en-US, de-DE

  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',

  debug: false,
  saveMissing: true,

  interpolation: {
    formatSeparator: ',',
    format(value, format, lng) {
      if (format === 'uppercase') {
        return upperCase(value);
      }

      if (format === PRICE_FORMAT_TYPE ||
                format === MONEY_FORMAT_TYPE) {
        return formatPrice(value, format, lng);
      }

      if (value instanceof Date) {
        return formatDate(value, format, lng);
      }

      return value;
    },
  },
};


// for browser use xhr backend to load translations and browser lng detector
if (process.browser) {
  i18n
    .use(XHR)
    // .use(Cache)
    // .use(LanguageDetector)
    .on('languageChanged', (lng) => {
      // moment.locale(lng);
      numeral.locale(lng);
    });
}

// initialize if not already initialized
if (!i18n.isInitialized) i18n.init(options);

// a simple helper to getInitialProps passed on loaded i18n data
i18n.getInitialProps = (req, namespaces = i18n.options.defaultNS) => {
  // if (!namespaces) namespaces = i18n.options.defaultNS;
  // if (typeof namespaces === 'string') namespaces = [namespaces];

  req.i18n.toJSON = () => null; // do not serialize i18next instance and send to client

  const initialI18nStore = {};
  req.i18n.languages.forEach((l) => {
    initialI18nStore[l] = {};
    namespaces.forEach((ns) => {
      initialI18nStore[l][ns] = req.i18n.services.resourceStore.data[l][ns] || {};
    });
  });

  return {
    // use the instance on req -
    // fixed language on request (avoid issues in race conditions with lngs of different users)
    i18n: req.i18n,
    initialI18nStore,
    initialLanguage: req.i18n.language,
  };
};

module.exports = i18n;
