import 'raf/polyfill';

import { mount, shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configureStore } from '~/stores/index';
import { Provider } from 'react-redux';
import Immutable from 'immutable';

configure({ adapter: new Adapter() });

const initI18nApp = (component) => {
  const store = configureStore(Immutable.Map({}));

  return (
    <Provider store={store}>
      {component}
    </Provider>);
};

global.mount = mount;
global.shallow = shallow;
global.initI18nApp = initI18nApp;

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
jest.mock('react-form', () => ({
  Field: () => 'Field',
  NestedField: () => 'NestedField',
  Form: () => component => component,
  withField: () => component => component,
  withNestedField: () => component => component,
}));

jest.mock('react-i18next', () => ({
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  translate: () => Component => props => <Component t={() => ''} {...props} />,
}));

jest.doMock('react-text-truncate', () => {
  const componentToMock = () => <div />;
  return componentToMock;
});

jest.doMock('react-select', () => ({
  Creatable: () => 'Creatable',
}));
