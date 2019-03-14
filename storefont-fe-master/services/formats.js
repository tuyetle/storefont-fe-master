// import moment from 'moment';
import fecha from 'fecha';
import numeral from 'numeral';
import _ from 'lodash';
import CONFIG, { DATE_SHORT_TYPE, PRICE_FORMAT_TYPE } from '~/config/localization';

export function formatDate(date = new Date(), format = DATE_SHORT_TYPE, lng = 'vi') {
  const config = CONFIG[lng];
  const defaultType = 'LL';
  let formatedDate = '';

  if (_.isObject(config)) {
    const dateType = config[format] || defaultType;
    // formatedDate = moment(date).format(dateType);
    formatedDate = fecha.format(date, dateType);
  }

  return formatedDate;
}

export function formatPrice(value = '', format = PRICE_FORMAT_TYPE, lng = 'vi') {
  const config = CONFIG[lng];
  const defaultType = '0.0a';
  let formatedValue = '';

  if (_.isString(value) || _.isNumber(value)) {
    const type = config[format] || defaultType;
    formatedValue = numeral(value).format(type);
  }

  return formatedValue;
}
