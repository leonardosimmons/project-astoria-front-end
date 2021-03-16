import { combineReducers } from 'redux';
import { backdropReducer } from '../components/backdrop/state/reducer';
import { navbarReducer } from '../components/navbar/state/reducer';

export const rootReducer = combineReducers({
  backdrop: backdropReducer,
  navbar: navbarReducer
});

export type AppState = ReturnType<typeof rootReducer>;