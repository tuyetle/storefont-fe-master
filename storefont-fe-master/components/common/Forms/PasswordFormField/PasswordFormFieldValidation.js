
import { isEmpty } from 'lodash';
import { REQUIRED, PASSWORD_MIN_LENGTH } from '~/services/validations/validationTypes';
import validatePassword from '~/services/validations/validatePassword';

const validateError = (value) => {
  let error;
  if (!isEmpty(value) && !validatePassword(value)) {
    error = PASSWORD_MIN_LENGTH;
  }

  return error;
};

export default validateError;
