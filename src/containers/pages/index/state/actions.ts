

import { FIRST_LOAD, IndexPageActions, INTRO_MODAL_TOGGLE } from './action-types';

export const firstLoad = (): IndexPageActions => (
  {
    type: FIRST_LOAD
  }
);

export const toggleIntroModal = (): IndexPageActions => (
  {
    type: INTRO_MODAL_TOGGLE
  }
);