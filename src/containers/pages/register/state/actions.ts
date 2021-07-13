import { AppActions } from '../../../../redux-store/action-types';
import { Combinable } from '../../../../utils/types';
import 
{ 
  SET_AGE, 
  SET_EMAIL, 
  SET_USERNAME, 
  SET_PASSWORD, 
  SET_PW_CHECK, 
  TOGGLE_ERROR_FLAG, 
  RegistrationFormActions
} from './action-types';


export const setUsername = (name: string): RegistrationFormActions => 
(
  {
    type: SET_USERNAME,
    payload: name
  }
);

export const setEmail = (email: string): RegistrationFormActions => 
(
  {
    type: SET_EMAIL,
    payload: email
  }
);

export const setAge = (age: Combinable): RegistrationFormActions => 
(
  {
    type: SET_AGE,
    payload: age
  }
);

export const setPassword = (password: string): RegistrationFormActions => 
(
  {
    type: SET_PASSWORD,
    payload: password
  }
);

export const setPwCheck = (password: string): RegistrationFormActions => 
(
  {
    type: SET_PW_CHECK,
    payload: password
  }
);

export const toggleErrorFlag = (): RegistrationFormActions => ({ type: TOGGLE_ERROR_FLAG });