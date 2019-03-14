import Cookies from 'js-cookie';

export function setCookie(name, value, options) {
  return Cookies.set(name, value, options);
}
export function setCookieToExpiryAfterDays(name, value, days) {
  const exdate = new Date();
  exdate.setTime(exdate.getTime() + (days * 60 * 1000));
  return setCookie(name, value, { expires: exdate });
}
export function getCookie(name) {
  return Cookies.get(name);
}
export function removeCookie(name, options) {
  return Cookies.remove(name, options);
}
