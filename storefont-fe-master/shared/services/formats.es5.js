const { PRICE_FORMAT_TYPE, DATE_SHORT_TYPE, CONFIG } = require('../config/localization.es5');
const _ = require('lodash');
const fecha = require('fecha');
const numeral = require('numeral');

module.exports = {
  formatDate: (date = new Date(), format = DATE_SHORT_TYPE, lng = 'vi') => {
    const config = CONFIG[lng];
    const defaultType = 'LL';
    let formatedDate = '';

    if (_.isObject(config)) {
      const dateType = config[format] || defaultType;
      // formatedDate = moment(date).format(dateType);
      formatedDate = fecha.format(date, dateType);
    }

    return formatedDate;
  },
  formatPrice: (value = '', format = PRICE_FORMAT_TYPE, lng = 'vi') => {
    const config = CONFIG[lng];
    const defaultType = '0.0a';
    let formatedValue = '';

    if (_.isString(value) || _.isNumber(value)) {
      const type = config[format] || defaultType;
      formatedValue = numeral(value).format(type);
    }

    return formatedValue;
  },
};
