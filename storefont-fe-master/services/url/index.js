import Promise from 'bluebird';
import each from 'lodash/each';
import info from '~/services/logger';
import RootModule from './modules/root';
import SearchModule from './modules/search';


const modules = [RootModule, SearchModule];

function buildPromises(mods, url) {
  const promises = [];
  each(mods, (mod) => {
    promises.push(mod.parseURL(url));
  });
  return promises;
}

const parseURL = (url, callback) => {
  let result = null;
  // let pr = null;
  const promises = buildPromises(modules, url);
  Promise
    .each(promises, (item) => {
      if (item !== null) {
        // result = item;
        result = item;
        Promise.cancel();
      }
    })
    .then(() => {
      // pr = Promise.resolve(result);
      info('from then');
      // callback(null);
    })
    .catch(() => {
      // pr = Promise.resolve(result);
      info('from catch');
    })
    .finally(() => {
      info('from finally');
      callback(result);
    });
  // return pr;
};

export default parseURL;
