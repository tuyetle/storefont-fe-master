import { URL } from 'url';
import Promise from 'bluebird';
import Module from './module';

async function parseURL(url) {
  const myURL = new URL(url);
  // console.log(`Search ${myURL.search}`);
  // if (myURL.pathname === '/search') {
  //   return myURL.search;
  // }
  // return null;

  const result = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('this is search');
    }, 100);
  });

  return result;
}

export default new Module('search', parseURL);
