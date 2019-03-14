import { isEmpty } from 'lodash';
import validateEmail from '~/services/validations/validateEmail';
import {
  REQUIRED,
  WRONG_FORMAT,
} from '~/services/validations/validationTypes';

const validateError = (value, isRequired) => {
  if (isRequired) {
    if (isEmpty(value)) {
      return REQUIRED;
    } else if (!validateEmail(value)) {
      return WRONG_FORMAT;
    }
  } else if (!isEmpty(value) && !validateEmail(value)) {
    return WRONG_FORMAT;
  }

  return null;
};

export default validateError;
