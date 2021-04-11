import React from 'react';
import { BaseOptions } from '../../utils/types';
import Video from '../video';

type Props = BaseOptions;

const Container: React.FunctionComponent<Props> = (
  { 
    parent, 
    styles, 
    classes,
    main, 
    video,
    bgImage,
    children
  }
) => {
  return (
    <div className={`
      ${ main ? styles && styles.mainContainer || '' : styles && styles.container || '' } 
      ${ parent ? main ? parent + '__main-container' : parent + '--container' : '' } 
      ${ classes || '' }`} 
      style={{ backgroundImage: `${ bgImage ? 'url(' + bgImage + ')' : '' }`}}
    >
      { video && <Video src={ video as string } /> }
      { children }
    </div>
  );
};

export default Container;