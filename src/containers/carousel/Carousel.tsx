import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { next, prev, firstSlide, lastSlide, setWidth, setSlideCount, setDotCount } from './state/actions';
import { AppActions } from '../../redux-store/action-types';
import { AppState } from '../../redux-store/reducers';
import { CarouselContext } from '../../utils/types';
import { cpnt } from '../../utils/keys';

import  CarouselContent from './CarouselContent';

type Props = {
  autoPlay?: number;
  slides?: [];
};

const Carousel: React.FunctionComponent<Props> = ({ autoPlay, slides, children }):JSX.Element => {
  const dispatch: React.Dispatch<AppActions> = useDispatch();
  const context: CarouselContext = useSelector((state: AppState) => state.carousel);


  /* --------------------  WIDTH  -------------------- */ 
  // sets the width of the carousel (based on user screen size)
  React.useEffect(() => 
  {
    dispatch(setWidth(window.innerWidth));

    return () => {
      dispatch(setWidth(0));
    }
  }, [ ]); // change from original

  /* -------------------  CONTROLS  ------------------- */  
  const nextSlide = React.useCallback(() =>
  {
    if(context.activeIndex === context.slideCount - 1)
      return dispatch(lastSlide());

    dispatch(next());
  }, [ context.activeIndex, context.slideCount, dispatch ]);

  const prevSlide = React.useCallback(() =>
  {
    if(context.activeIndex === 0)
      return dispatch(firstSlide());

    dispatch(prev());
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
    dispatch(setSlideCount(count))
  }, [ dispatch ]);

  const handleDotCount = React.useCallback((dots: number): void => 
  {
    let arr: number[] = [];
    for(let i=0; i<dots; i++) {
      arr.push(i + 1);
    }
    dispatch(setDotCount(arr));
  }, [ dispatch ]);


  /* ---------------------  RENDER  --------------------- */
  return (
    <div className={`${ cpnt.MOBILE_NAVIGATION }__carousel carousel`}>
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