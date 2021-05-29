import { AppActions } from '../../../../redux-store/action-types';
import { Combinable } from '../../../../utils/types';
import { SET_AGE, SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_PASSWORD, SET_PW_CHECK } from './action-types';


export const setFirstName = (name: string): AppActions => 
(
  {
    type: SET_FIRSTNAME,
    payload: name
  }
);

export const setLastName = (name: string): AppActions => 
(
  {
    type: SET_LASTNAME,
    payload: name
  }
);

export const setAge = (age: Combinable): AppActions => 
(
  {
    type: SET_AGE,
    payload: age
  }
);

export const setEmail = (email: string): AppActions => 
(
  {
    type: SET_EMAIL,
    payload: email
  }
);

export const setPassword = (password: string): AppActions => 
(
  {
    type: SET_PASSWORD,
    payload: password
  }
);

export const setPwCheck = (password: string): AppActions => 
(
  {
    type: SET_PW_CHECK,
    payload: password
  }
);
