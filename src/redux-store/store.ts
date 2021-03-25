import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { AppActions } from './action-types';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { AppState, rootReducer } from './reducers';

let store: any;

function initStore(initialState: AppState) 
{
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>))
  )
};

export const initializeStore = (preloadedState: AppState) => 
{
  let _store = store ?? initStore(preloadedState);

  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    store = undefined;
  }

  if (typeof window === 'undefined') return _store;
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState: AppState) 
{
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
};
