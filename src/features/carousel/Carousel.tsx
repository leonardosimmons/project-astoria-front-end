import React from 'react';

import carouselReducer from './reducer';
import { CarouselContext } from '../../utils/types';
import CarouselContent, { Base } from './CarouselContent';
import { NEXT, PREV, FIRST_SLIDE, LAST_SLIDE, SET_WIDTH, SET_SLIDE_COUNT, SET_DOT_COUNT } from './action-types';

type Props = {
  parent?: string;
  autoPlay?: number;
  slides?: [];
  styles?: any;
};

const initialState: CarouselContext = {
  translate: 0,
  transition: 0.45,
  activeIndex: 0,
  slideCount: 0,
  dotCount: [],
  width: 0,
  height: parseInt(Base.height),
};

const Carousel: React.FunctionComponent<Props> = ({ parent, autoPlay, slides, styles, children }):JSX.Element => {
  const [ context, dispatch ] = React.useReducer(carouselReducer, initialState);

  /* --------------------  WIDTH  -------------------- */ 
  // sets the width of the carousel (based on user screen size)
  React.useEffect(() => 
  {
    dispatch({ 
      type: SET_WIDTH, 
      payload: { width: window.innerWidth }
    });

    return () => {
      dispatch({ 
        type: SET_WIDTH, 
        payload: { width: 0 }
      });
    }
  }, [ context.activeIndex ]);

  /* -------------------  CONTROLS  ------------------- */  
  const nextSlide = React.useCallback(() =>
  {
    if(context.activeIndex === context.slideCount - 1)
      return dispatch({ type: LAST_SLIDE });

    dispatch({ type: NEXT });
  }, [ context.activeIndex, context.slideCount ]);

  const prevSlide = React.useCallback(() =>
  {
    if(context.activeIndex === 0)
      return dispatch({ type: FIRST_SLIDE });

    dispatch({ type: PREV });
  }, [ context.activeIndex ]);
  

  /* -------------------  AUTOPLAY  ------------------- */ 
  const autoPlayRef = React.useRef<() => void>();
  const intervalRef = React.useRef<NodeJS.Timeout>();

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
    const play = () => autoPlayRef.current!();

    if(autoPlay)
    {
      const interval = setInterval(play, autoPlay! * 1000);
      intervalRef.current = interval;
      
      return () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }
  }, [ autoPlay ]);

  
  /* --------------------  HANDLERS  -------------------- */  
  const handleSlideCount = React.useCallback((count: number): void =>
  {
    dispatch({ 
      type: SET_SLIDE_COUNT, 
      payload: { count: count }
    });
  }, []);

  const handleDotCount = React.useCallback((dots: number): void => 
  {
    let arr: number[] = [];
    for(let i=0; i<dots; i++) {
      arr.push(i + 1);
    }
    
    dispatch({ 
      type: SET_DOT_COUNT, 
      payload: { count: arr }
    });
  }, []);


  /* ---------------------  RENDER  --------------------- */
  return (
    <div className={`${ styles && styles.container } ${ parent }__carousel--container carousel`}>
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
