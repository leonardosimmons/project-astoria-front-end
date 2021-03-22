import React from 'react';
import Image from 'next/image';
import Container from '../container';

type Props = {
  parent: string;
  src: string;
  width: string;
  height: string;
  alt?: string;
  left?: boolean;
  right?: boolean;
  quality?: number;
  index?: string | number;
  layout?: 'intrinsic' | 'responsive';
};

const Icon: React.FunctionComponent<Props> = (
  { 
    parent, 
    src, 
    width,
    height, 
    left, 
    right, 
    index,
    alt = 'icon',
    quality = 100,
    layout = 'intrinsic',
    children 
  }
): JSX.Element => {
  return (
    // change to content-box
    <Container parent={`${ parent }--icon`}>
    {
    left && 
    <React.Fragment>
      <Image 
        className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`}`} 
        layout={ layout }
        quality={ quality }
        src={ src } 
        alt={ alt } 
        width={ width } 
        height={ height } />
      { children }
    </React.Fragment>
    }
    {
    !left && !right &&
    <Image 
      className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`}`} 
      layout={ layout }
      quality={ quality }
      src={ src } 
      alt={ alt } 
      width={ width } 
      height={ height }/>
    }
    {
    right && 
    <React.Fragment>
      { children }
      <Image 
        className={`${ parent }--icon ${ index && `${ parent }--icon-${ index }`}`} 
        layout={ layout }
        quality={ quality }
        src={ src } 
        alt={ alt } 
        width={ width } 
        height={ height } />
    </React.Fragment>
    }
    </Container>
  );
};

export default Icon;