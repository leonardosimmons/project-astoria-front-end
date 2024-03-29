
import { RegistrationFormContext } from '../../utils/types';
import 
{ 
  RegistrationFormActions, 
  SET_AGE, 
  SET_EMAIL, 
  SET_PASSWORD, 
  SET_PW_CHECK, 
  SET_USERNAME, 
  TOGGLE_ERROR_FLAG
} from './action-types';

const registrationFormContext: RegistrationFormContext = {
  username: '',
  email: '',
  age: 0,
  password: '',
  pwCheck: '',
  errorFlag: false
}; 


export function registrationFormReducer(state = registrationFormContext, action: RegistrationFormActions): RegistrationFormContext
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
    case TOGGLE_ERROR_FLAG:
      return {...state, errorFlag: !state.errorFlag};
    default:
      return state;
  }
};
