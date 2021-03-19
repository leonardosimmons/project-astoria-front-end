
import { CarouselContext } from '../../../utils/types/types';
import { Base } from '../CarouselContent';
import { NEXT, PREV, FIRST_SLIDE, LAST_SLIDE, SET_WIDTH, SET_SLIDE_COUNT, SET_DOT_COUNT, CarouselActions } from './action-types';

const initState: CarouselContext = {
  translate: 0,
  transition: 0.45,
  activeIndex: 0,
  slideCount: 0,
  dotCount: [],
  width: 0,
  height: parseInt(Base.height),
};

const carouselReducer = (state = initState, action: CarouselActions): CarouselContext => {
  switch(action.type)
  {
    case NEXT:
      const nextIndex = state.activeIndex;
      return {
        ...state,
        activeIndex: nextIndex + 1,
        translate: (nextIndex + 1) * state.width
      };
    case PREV:
      const prevIndex = state.activeIndex;
      return {
        ...state,
        activeIndex: prevIndex - 1,
        translate: (prevIndex - 1) * state.width
      }; 
    case FIRST_SLIDE:
      const slideCount = state.slideCount;
      return {
        ...state,
        activeIndex: slideCount - 1,
        translate: (slideCount -1) * state.width
      };
    case LAST_SLIDE:
      return {
        ...state,
        activeIndex: 0,
        translate: 0
      }
    case SET_WIDTH:
      const width = action.payload.width;
      return {
        ...state,
        width: width
      };
    case SET_SLIDE_COUNT:
      const slides = action.payload.count;
      return {
        ...state,
        slideCount: slides
      };
    case SET_DOT_COUNT:
      const dots = action.payload.count;
      return {
        ...state,
        dotCount: dots
      };
    default:
      return state;
  }
};

export { carouselReducer };