import { isNil } from 'lodash';
import { REQUIRED } from '~/services/validations/validationTypes';

const validate = (values) => {
  // values is an Immutable.Map here!
  const errors = {};
  if (isNil(values.get('emailOrPhone'))) {
    errors.emailOrPhone = REQUIRED;
  }
  if (isNil(values.get('captcha'))) {
    errors.captcha = REQUIRED;
  }
  return errors;
};

export default validate;
