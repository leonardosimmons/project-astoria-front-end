import { combineReducers } from 'redux';
import { backdropReducer } from '../components/backdrop/state';
import { navbarReducer } from '../containers/navbar/state';
import { indexPageReducer } from '../containers/pages/index/state';

export const rootReducer = combineReducers({
  backdrop: backdropReducer,
  navbar: navbarReducer,
  indexPage: indexPageReducer
});

export type AppState = ReturnType<typeof rootReducer>;