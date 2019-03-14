import { createSelector } from 'reselect';
import { SEO_STORE, SEO_LINKS_LIST } from '~/stores/seoReducer';

const selectSeo = state => state.get(SEO_STORE);

const makeGetSeoLinks = () => createSelector(
  selectSeo,
  state => state.get(SEO_LINKS_LIST),
);

export {
  selectSeo,
  makeGetSeoLinks,
};
