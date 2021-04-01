
import { AppActions } from '../../redux-store/action-types';
import { NEXT, PREV, FIRST_SLIDE, LAST_SLIDE, SET_WIDTH, SET_SLIDE_COUNT, SET_DOT_COUNT, RESET_POSITION } from './action-types';

export const next = ():AppActions => ({ type: NEXT });
export const prev = ():AppActions => ({ type: PREV });
export const firstSlide = ():AppActions => ({ type: FIRST_SLIDE });
export const lastSlide = ():AppActions => ({ type: LAST_SLIDE });
export const resetPositon = ():AppActions => ({ type: RESET_POSITION });

export const setWidth = (width: number):AppActions => 
(
  {
    type: SET_WIDTH,
    payload: {
      width: width
    }
  }
);

export const setSlideCount = (count: number):AppActions => 
(
  {
    type: SET_SLIDE_COUNT,
    payload: {
      count: count
    }
  }
);

export const setDotCount = (count: number[]):AppActions =>
(
  {
    type: SET_DOT_COUNT,
    payload: {
      count: count
    }
  }
);
