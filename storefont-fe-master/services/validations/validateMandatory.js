import { isNil } from 'lodash';

const required = value => (isNil(value) && value !== '');

export default required;
