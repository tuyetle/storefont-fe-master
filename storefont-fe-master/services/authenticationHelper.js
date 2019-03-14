import Cookies from 'js-cookie';
import { TOKEN } from '~/actions/BusinessActionTypes';

const AuthenticationHelper = (() => ({
  getToken: () => Cookies.get(TOKEN),
}))();

export default AuthenticationHelper;
