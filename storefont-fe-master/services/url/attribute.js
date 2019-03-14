import each from 'lodash/each';
import getSlug from 'speakingurl';
import store from './db';

const AttribTypes = ['location', 'propertyType', 'priceRange'];
const collectionPrefix = 'attr_';

(function initStore() {
  // console.log('init atribs');
  each(AttribTypes, (key) => {
    store.addCollection(`${collectionPrefix}${key}`, {
      unique: ['slug', 'value'],
    });
  });
})();

export default store;

export function findByValue(attr, value) {
  const col = store.getCollection(`${collectionPrefix}${attr}`);
  return col.by('value', value);
}

/*
Add slug of an attribute
*/
export function add(attr, title, value) {
  const col = store.getCollection(`${collectionPrefix}${attr}`);

  if (col === null) {
    throw new Error(`Attribute ${attr} not defined.`);
  }

  let obj = col.by('value', value);

  const slug = getSlug(title);

  if (obj) { // existed
    if (obj.slug !== slug) { // different slug but same value ??
      // obj.slug = slug;
      // col.update(obj);
      throw new Error(`Value ${value} has already slug.`);
    }
    return obj;
  }

  // not found by value
  obj = col.by('slug', slug);
  if (obj) { // slug already used
    obj.count += 1; // counter only in main slug
    col.update(obj);
    col.insert({ slug: `${slug}-${obj.count}`, value, count: 0 });

    return obj;
  }

  // totally new slug
  return col.insert({ slug, value, count: 0 });

  // return col;
}
