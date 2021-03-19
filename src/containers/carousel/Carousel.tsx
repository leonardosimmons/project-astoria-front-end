import React from 'react';

import carouselReducer from './reducer';
import CarouselContent, { Base } from './CarouselContent';
import { NEXT, PREV, FIRST_SLIDE, LAST_SLIDE, SET_WIDTH, SET_SLIDE_COUNT, SET_DOT_COUNT } from './state/action-types';

type Props = {
  autoPlay?: number;
  slides?: [];
};

const initialState = {
  translate: 0,
  transition: 0.45,
  activeIndex: 0,
  slideCount: 0,
  dotCount: [],
  width: 0,
  height: parseInt(Base.height),
};

const Carousel: React.FunctionComponent<Props> = ({ autoPlay, slides, children }):JSX.Element => {
  const [ context, dispatch ] = React.useReducer(carouselReducer, initialState);


  /* --------------------  WIDTH  -------------------- */ 
  // sets the width of the carousel (based on user screen size)
  React.useEffect(() => 
  {
    dispatch({ type: SET_WIDTH, payload: { width: window.innerWidth }});

    return () => {
      dispatch({ type: SET_WIDTH, payload: { width: 0 }});
    }
  }, []); // change from original

  /* -------------------  CONTROLS  ------------------- */  
  const nextSlide = React.useCallback(() =>
  {
    if(context.activeIndex === context.slideCount - 1)
      return dispatch({ type: LAST_SLIDE });

    dispatch({ type: NEXT });
  }, [ context.activeIndex, context.slideCount, dispatch ]);

  const prevSlide = React.useCallback(() =>
  {
    if(context.activeIndex === 0)
      return dispatch({ type: FIRST_SLIDE });

    dispatch({ type: PREV });
  }, [ context.activeIndex ]);
  
  /* -------------------  AUTOPLAY  ------------------- */ 
  const autoPlayRef = React.useRef<any>();

  // updates the current ref when slide changes
  const updateAutoPlayRef = React.useCallback(() =>
  {
    autoPlayRef.current = nextSlide;
  }, [ nextSlide ]);

  // auto calls update function when slide changes
  React.useEffect(() =>
  {
    updateAutoPlayRef();
  }, [ updateAutoPlayRef ]);

  // controls the autoplay feature
  React.useEffect(() =>
  {
    const play = () => { return autoPlayRef.current(); }

    if(autoPlay)
    {
      const interval = setInterval(play, autoPlay! * 1000);
      return () => {
        clearInterval(interval);
      }
    }
  }, [ autoPlay ]);

  
  /* --------------------  HANDLERS  -------------------- */  
  const handleSlideCount = React.useCallback((count: number): void =>
  {
    dispatch({ type: SET_SLIDE_COUNT, payload: { count: count }})
  }, [ dispatch ]);

  const handleDotCount = React.useCallback((dots: number): void => 
  {
    let arr: number[] = [];
    for(let i=0; i<dots; i++) {
      arr.push(i + 1);
    }
    dispatch({ type: SET_DOT_COUNT, payload: { count: arr }});
  }, [ dispatch ]);


  /* ---------------------  RENDER  --------------------- */
  return (
    <div className={`carousel`}>
      <CarouselContent
        width={ context.width }
        translate={ context.translate }
        transition={ context.transition }
        slideCount={ handleSlideCount }
        dotCount={ handleDotCount }
      >
        { children }
      </CarouselContent>
      {/* 
        ADD arrows/dots HERE 
      */}
    </div>
  );
};

export default Carousel;