import { URL } from 'url';
import Promise from 'bluebird';
import Module from './module';

async function parseURL(url) {
  const myURL = new URL(url);
  const result = new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, 100);
  });

  return result;
}

export default new Module('root', parseURL);
