import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'immutable';
import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import authenticationMiddleware from '~/middlewares/auth';
import gtmMiddleware from '~/middlewares/gtm';
import rootSaga from '~/services/sagas/sagas';
import makeRootReducer from './reducers';

const dev = (process.env.NODE_ENV === 'development');

const convertStateToImmutable = (state) => {
  if (state.toJS) return state;
  let immutableState = Immutable.Map({});
  Object.entries(state).forEach(([key, value]) => {
    immutableState = immutableState.set(key, Immutable.Map(value));
  });
  return immutableState;
};

export const configureStore = (state = Immutable.Map({})) => {
  const sagaMiddleware = createSagaMiddleware();
  let middlewares = [
    authenticationMiddleware,
    gtmMiddleware,
    sagaMiddleware,
  ];
  if (dev && process.browser) {
    const { createLogger } = require('redux-logger');
    middlewares = [...middlewares, createLogger()];
  }

  const store = createStore(
    makeRootReducer(),
    convertStateToImmutable(state),
    dev ? composeWithDevTools(applyMiddleware(...middlewares))
      : compose(applyMiddleware(...middlewares)),
  );

  store.runSagaTask = () => {
    store.sagaTask = sagaMiddleware.run(rootSaga);
  };

  store.runSagaTask();

  return store;
};

export default function withReduxSaga(BaseComponent) {
  return withRedux(configureStore)(nextReduxSaga(BaseComponent));
}
