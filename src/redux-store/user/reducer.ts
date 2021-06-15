
import { UserContext } from '../../utils/types';
import { AppActions } from '../action-types';
import { SET_USER, SIGN_IN_USER, SIGN_OUT_USER } from './action-types';


export const userInitialState: UserContext = {
  id: 0,
  info: {
    name: '',
    email: '',
    image: ''
  },
  status : {
    isError: false, 
    isSignedIn: false 
  }
};

export function userReducer(state = userInitialState, action: AppActions): UserContext {
  switch(action.type) {
    case SET_USER:
      return {...state, id: action.payload.id, info: action.payload.info};
    case SIGN_IN_USER:
      return {...state, status: { ...state.status, isSignedIn: true }};
    case SIGN_OUT_USER:
      return userInitialState;
    default:
      return state;
  };
};
