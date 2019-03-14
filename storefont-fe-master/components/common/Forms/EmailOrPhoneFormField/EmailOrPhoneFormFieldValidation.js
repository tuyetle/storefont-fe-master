import { isEmpty } from 'lodash';
import validateEmail from '~/services/validations/validateEmail';
import validatePhone from '~/services/validations/validatePhone';
import {
  REQUIRED,
  WRONG_FORMAT,
} from '~/services/validations/validationTypes';

const validateError = (value) => {
  let error;
  if (!isEmpty(value) && !validateEmail(value) && !validatePhone(value)) {
    error = WRONG_FORMAT;
  }

  return error;
};

export default validateError;
