
import { RegistrationFormConext } from '../../../../utils/types';
import { RegistrationFormActions, SET_AGE, SET_EMAIL, SET_FIRSTNAME, SET_LASTNAME, SET_PASSWORD, SET_PW_CHECK } from './action-types';

const registrationFormContext: RegistrationFormConext = {
  firstName: '',
  lastName: '',
  age: 0,
  email: '',
  password: '',
  pwCheck: ''
}; 


export function registrationFormReducer(state = registrationFormContext, action: RegistrationFormActions): RegistrationFormConext
{
  switch(action.type)
  {
    case SET_FIRSTNAME:
      return {...state, firstName: action.payload};
    case SET_LASTNAME:
      return {...state, lastName: action.payload};
    case SET_AGE:
      return {...state, age: action.payload};
    case SET_EMAIL:
      return {...state, email: action.payload};
    case SET_PASSWORD:
      return {...state, password: action.payload};
    case SET_PW_CHECK:
      return {...state, pwCheck: action.payload};
    default:
      return state;
  }
};
