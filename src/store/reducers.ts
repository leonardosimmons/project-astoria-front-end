import { combineReducers } from 'redux';
import { navbarReducer } from '../components/navbar/state';

export const rootReducer = combineReducers({
  navbar: navbarReducer
});

export type AppState = ReturnType<typeof rootReducer>;