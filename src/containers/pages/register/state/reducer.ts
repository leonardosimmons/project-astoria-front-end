
import { RegistrationFormConext } from '../../../../utils/types';
import { RegistrationFormActions, SET_AGE, SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_PASSWORD, SET_PW_CHECK, SET_USERNAME } from './action-types';

const registrationFormContext: RegistrationFormConext = {
  username: '',
  email: '',
  age: 0,
  password: '',
  pwCheck: ''
}; 


export function registrationFormReducer(state = registrationFormContext, action: RegistrationFormActions): RegistrationFormConext
{
  switch(action.type)
  {
    case SET_USERNAME:
      return {...state, username: action.payload};
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_AGE:
      return {...state, age: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    case SET_PW_CHECK:
      return {...state, pwCheck: action.payload};
    default:
      return state;
  }
};
