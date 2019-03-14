const express = require('express');
const path = require('path');
const next = require('next');
const fs = require('fs');
const i18nextMiddleware = require('i18next-express-middleware');
const Backend = require('i18next-node-fs-backend');

const routes = require('./shared/routes');
const i18n = require('./shared/i18n');

const localesFiles = [];
const defaultLanguage = 'vi';
const localesFolder = path.join(__dirname, '/static/locales/', defaultLanguage);


const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);


// import lokiStore, { add } from '~/services/url/attribute';

// console.log(add('location', 'Quận 7 Tp Hồ CHí Minh', 25));
// console.log(add('location', 'Quan 7 Tp Ho Chi Minh', 22));
// add('location', 'Quan 3 Tp Ho CHi Minh', 25);

// console.log(lokiStore.serialize());

// Read all locales files to load all namespaces
fs.readdirSync(localesFolder).forEach((file) => {
  localesFiles.push(file.replace('.json', ''));
});

// init i18next with serverside settings
// using i18next-express-middleware
i18n
  .use(Backend)
// .use(i18nextMiddleware.LanguageDetector)
  .init({
    preload: [defaultLanguage], // preload all langages
    ns: localesFiles, // need to preload all the namespaces
    backend: {
      loadPath: path.join(__dirname, '/static/locales/{{lng}}/{{ns}}.json'),
      // addPath: path.join(__dirname, '/static/locales/{{lng}}/{{ns}}.missing.json'),
    },
  }, () => {
    // loaded translations we can bootstrap our routes
    app.prepare()
      .then(() => {
        const server = express();

        // enable middleware for i18next
        server.use(i18nextMiddleware.handle(i18n));

        // serve locales for client
        server.use('/locales', express.static(path.join(__dirname, '/static/locales')));

        // missing keys
        server.post('/locales/add/:lng/:ns', i18nextMiddleware.missingKeyHandler(i18n));

        // use next.js
        server.get('*', (req, res) => handle(req, res));

        server.listen(port, (err) => {
          if (err) throw err;
          /* eslint no-console: 0 */
          console.log(`> Ready on http://localhost:${port}`);
        });
      });
  });
