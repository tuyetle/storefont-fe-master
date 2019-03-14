# Store Front FE

MBND Store front website

## Requirements
* node `^6.0.0`
* yarn `^0.24.0` or npm `^3.0.0`

## Installation

```bash
$ cd <my-project-name>
```

When that's done, install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn  # Install project dependencies (or `npm install`)
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`|
|`build`            |Builds the application to ./dist|
|`test`             |Runs unit tests with Karma. See [testing](#testing)|
|`test:watch`       |Runs `test` in watch mode to re-run tests when changed|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`         |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix)|

## Project Structure

The project structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. This structure is only meant to serve as a guide, it is by no means prescriptive.

```
.
├── build                    # All build-related code
├── dist                     # Distribution files
├── public                   # Static public assets (not imported anywhere in source code)
├── src                      # Application source code
│   ├── index.html           # Main HTML page container for app
│   ├── index.js             # Browser normalization and polyfills
│   ├── history.js           # Application bootstrap and rendering
│   ├── normalize.js         # Browser normalization and polyfills
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── middleware           # Middleware of Redux
│   ├── services             # RESTFul API services
│   ├── store                # Redux-specific pieces
│   └── styles               # Application-wide styles (generally settings)
│   └── assets               # Application-wide assets (ex: font, images)
└── tests                    # Unit tests
└── automation_tests         # Automated Acceptance tests
```

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn start`). This feature is implemented with webpack's [Hot Module Replacement](https://webpack.github.io/docs/hot-module-replacement.html) capabilities, where code updates can be injected to the application while it's running, no full reload required. Here's how it works:

* For **JavaScript** modules, a code change will trigger the application to re-render from the top of the tree. **Global state is preserved (i.e. redux), but any local component state is reset**. This differs from React Hot Loader, but we've found that performing a full re-render helps avoid subtle bugs caused by RHL patching.

### Redux DevTools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn't require installing any packages in your project.

However, it's easy to bundle these developer tools locally should you choose to do so. First, grab the packages from npm:

```bash
yarn add --dev redux-devtools redux-devtools-log-monitor redux-devtools-dock-monitor
```

Then follow the [manual integration walkthrough](https://github.com/gaearon/redux-devtools/blob/master/docs/Walkthrough.md).

## Routing
We use `react-router` [route definitions](https://github.com/ReactTraining/react-router/blob/v3/docs/API.md#plainroute) (`<route>/index.js`) to define units of logic within our application. See the [project structure](#project-structure) section for more information.

## Testing
To add a unit test, create a `.spec.js` file anywhere inside of `./tests`. Karma and webpack will automatically find these files, and Mocha and Chai will be available within your test without the need to import them. Here are a few important plugins and packages available to you during testing:

### dirty-chai

Some of the assertions available from [chai](chaijs.com) use [magical getters](http://chaijs.com/api/bdd/#method_true). These are problematic for a few reasons:

1) If you mistype a property name (e.g. `expect(false).to.be.true`) then the expression evaluates to undefined, the magical getter on the `true` is never run, and so your test silently passes.
2) By default, linters don't understand them and therefore mark them as unused expressions, which can be annoying.

[Dirty Chai](https://github.com/prodatakey/dirty-chai) fixes this by converting these getters into callable functions. This way, if mistype an assertion, our attempt to invoke it will throw due to the property being undefined.

```js
// This silently passes because the getter on `true` is never invoked!
it('should be true', () => {
  expect(false).to.be.true // evalutes to undefined :(
})

// Much better! Our assertion is invalid, so it throws rather than implicitly passing.
it('should be true', () => {
  expect(false).to.be.true() // `true` is not defined!
})
```

## Building for Production

## Deployment

There is a `./dist` folder generated by `yarn build`. It contains the distribution files.

### Static Deployments

Serve the application with a web server such as nginx by pointing it at your `./dist` folder. Make sure to direct incoming route requests to the root `./dist/index.html` file so that the client application will be loaded; react-router will take care of the rest.