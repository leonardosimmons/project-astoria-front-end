import { combineReducers } from 'redux';
import { backdropReducer } from '../components/backdrop/state';
import { navbarReducer } from '../components/navbar/state';

export const rootReducer = combineReducers({
  backdrop: backdropReducer,
  navbar: navbarReducer,
});

export type AppState = ReturnType<typeof rootReducer>;