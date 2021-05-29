import { combineReducers } from 'redux';
import { backdropReducer } from '../components/backdrop/state';
import { navbarReducer } from '../containers/navbar/state';
import { indexPageReducer } from '../containers/pages/index/state';
import { registrationFormReducer } from '../containers/pages/register/state/reducer';

export const rootReducer = combineReducers({
  backdrop: backdropReducer,
  navbar: navbarReducer,
  indexPage: indexPageReducer,
  regForm: registrationFormReducer
});

export type AppState = ReturnType<typeof rootReducer>;