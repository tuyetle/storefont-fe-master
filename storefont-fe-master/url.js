import info from '~/services/logger';
import parseURL from './services/url';

parseURL('http://www.muabannhadat.vn/search?v=123', (result) => {
  info('from url: ', result);
});
