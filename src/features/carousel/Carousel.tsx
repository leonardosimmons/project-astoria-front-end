import React from 'react';
import { key } from '../../utils/keys';
import { NEXT, PREV, FIRST_SLIDE, LAST_SLIDE, SET_WIDTH, SET_SLIDE_COUNT, SET_DOT_COUNT } from './action-types';
import { CarouselContext } from '../../utils/types';
import carouselReducer from './reducer';

import CarouselContent, { Base } from './CarouselContent';
import Arrow from './components/arrows';
import CarouselDots from './components/dots/Dots';

type Props = {
  autoPlay?: number;
  slides?: [];
  styles?: any;
  height?: number;
  arrows?: boolean;
  dots?: boolean;
};

const initialState: CarouselContext = {
  translate: 0,
  transition: 0.45,
  activeIndex: 0,
  slideCount: 0,
  dotCount: [],
  width: 0,
  height: 0,
};

const Carousel: React.FunctionComponent<Props> = (
  { 
    autoPlay, 
    slides, 
    styles,
    height,
    arrows,
    dots, 
    children 
  }
):JSX.Element => {
  const [ context, dispatch ] = React.useReducer(carouselReducer, initialState);

  /* --------------------  WIDTH  -------------------- */ 
  // sets the width of the carousel (based on user screen size)
  React.useEffect(() => 
  {
    const getWidth = () => {
      const current = window.innerWidth;

      if (window.innerWidth > 2160) 
        return 2160;

      return current;  
    };

    dispatch({ 
      type: SET_WIDTH, 
      payload: { width: getWidth() }
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
    clearInterval(intervalRef.current as NodeJS.Timeout);

    if(context.activeIndex === context.slideCount - 1)
      return dispatch({ type: LAST_SLIDE });

    dispatch({ type: NEXT });
  }, [ context.activeIndex, context.slideCount ]);

  const prevSlide = React.useCallback(() =>
  {
    clearInterval(intervalRef.current as NodeJS.Timeout);

    if(context.activeIndex === 0)
      return dispatch({ type: FIRST_SLIDE });

    dispatch({ type: PREV });
  }, [ context.activeIndex ]);
  

  /* -------------------  AUTOPLAY  ------------------- */ 
  const nextSlideRef = React.useRef<() => void>();
  const intervalRef = React.useRef<NodeJS.Timeout>();

  // updates the current ref when slide changes
  const updateNextSlideRef = React.useCallback(() =>
  {
    nextSlideRef.current = nextSlide;
  }, [ nextSlide ]);

  // auto calls update function when slide changes
  React.useEffect(() =>
  {
    updateNextSlideRef();
  }, [ updateNextSlideRef ]);

  // controls the autoplay feature
  React.useEffect(() =>
  {
    const play = () => nextSlideRef.current!();

    if(autoPlay)
    {
      const interval = setInterval(play, autoPlay! * 1000);
      intervalRef.current = interval;
      
      return () => {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }
    }
  }, [ autoPlay, nextSlide, prevSlide ]);

  
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
    <div className={`${ styles && styles.container || '' } carousel overflow-hidden noselect relative`}>
      <CarouselContent
        height={ height }
        width={ context.width }
        translate={ context.translate }
        transition={ context.transition }
        slideCount={ handleSlideCount }
        dotCount={ handleDotCount }
      >
        { children }
      </CarouselContent>
      <React.Fragment>
        {
          arrows &&
          <>
            <Arrow direction={ key.LEFT } index={ context.activeIndex } clicked={ prevSlide }/>
            <Arrow direction={ key.RIGHT } index={ context.activeIndex } clicked={ nextSlide }/>
          </>
        }
        {
          dots &&
          <CarouselDots 
            slides={ context.dotCount }
            activeIndex={ context.activeIndex }
          />
        }
      </React.Fragment>
    </div>
  );
};

export default Carousel;
