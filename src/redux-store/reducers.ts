import { combineReducers } from 'redux';
import { backdropReducer } from '../components/backdrop/state';
import { navbarReducer } from '../components/navbar/state';
import { carouselReducer } from '../containers/carousel/state';

export const rootReducer = combineReducers({
  backdrop: backdropReducer,
  navbar: navbarReducer,
  carousel: carouselReducer
});

export type AppState = ReturnType<typeof rootReducer>;