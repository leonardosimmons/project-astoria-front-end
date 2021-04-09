import React from 'react';
import { Text } from '../../utils/types';

type Props = {
  parent?: string;
  styles?: any;
} & Text

const TextBox: React.FunctionComponent<Props> = (
  { 
    parent,
    mainHeading,
    headingOne,
    headingTwo,
    subHeadOne,
    subHeadTwo, 
    textOne, 
    textTwo, 
    textThree, 
    textFour, 
    textFive,
    spanOne, 
    spanTwo, 
    spanThree, 
    spanFour, 
    spanFive,
    styles,
    mainHeadingClasses,
    headingOneClasses,
    headingTwoClasses,
    subHeadOneClasses,
    subHeadTwoClasses,
    textOneClasses,
    textTwoClasses,
    textThreeClasses,
    textFourClasses,
    textFiveClasses,
    spanOneClasses,
    spanTwoClasses,
    spanThreeClasses,
    spanFourClasses,
    spanFiveClasses
  }
): JSX.Element => {
  return (
    <React.Fragment>
      { mainHeading && <h1 className={`${ styles && styles.mainHeading } ${ parent ? parent + '--main-heading' : '' } ${ mainHeadingClasses || '' }`}>{ mainHeading }</h1> }
      { headingOne && <h2 className={`${ styles && styles.headingOne } ${ parent ? parent + '--heading-1' : '' } ${ headingOneClasses || '' }`}>{ headingOne }</h2> }
      { headingTwo && <h2 className={`${ styles && styles.headingTwo } ${ parent ? parent + '--heading-2' : '' } ${ headingTwoClasses || '' }`}>{ headingTwo }</h2> }
      { subHeadOne && <h3 className={`${ styles && styles.subHeadingOne } ${ parent ? parent + '--sub-heading-1' : '' } ${ subHeadOneClasses || '' }`}>{ subHeadOne }</h3> }
      { subHeadTwo && <h3 className={`${ styles && styles.subHeadingTwo } ${ parent ? parent + '--sub-heading-2' : '' } ${ subHeadTwoClasses || '' }`}>{ subHeadTwo }</h3> }
      { textOne && <p className={`${ styles && styles.textOne } ${ parent ? parent + '--text-1' : '' } ${ textOneClasses || '' }`}>{ textOne }</p> }
      { textTwo && <p className={`${ styles && styles.textTwo } ${ parent ? parent + '--text-2' : '' } ${ textTwoClasses || '' }`}>{ textTwo }</p> }
      { textThree && <p className={`${ styles && styles.textThree } ${ parent ? parent + '--text-3' : '' } ${ textThreeClasses || '' }`}>{ textThree }</p> }
      { textFour && <p className={`${ styles && styles.textFour } ${ parent ? parent + '--text-4' : '' } ${ textFourClasses || '' }`}>{ textFour }</p> }
      { textFive && <p className={`${ styles && styles.textFive } ${ parent ? parent + '--text-5' : '' } ${ textFiveClasses || '' }`}>{ textFive }</p> }
      { spanOne && <span className={`${ styles && styles.spanOne } ${ parent ? parent + '--span-1' : '' } ${ spanOneClasses || '' }`}>{ spanOne }</span> }
      { spanTwo && <span className={`${ styles && styles.spanTwo } ${ parent ? parent + '--span-2' : '' } ${ spanTwoClasses || '' }`}>{ spanTwo }</span> }
      { spanThree && <span className={`${ styles && styles.spanThree } ${ parent ? parent + '--span-3' : '' } ${ spanThreeClasses || '' }`}>{ spanThree }</span> }
      { spanFour && <span className={`${ styles && styles.spanFour } ${ parent ? parent + '--span-4' : '' } ${ spanFourClasses || '' }`}>{ spanFour }</span> }
      { spanFive && <span className={`${ styles && styles.spanFive } ${ parent ? parent + '--span-5' : '' } ${ spanFiveClasses || '' }`}>{ spanFive }</span> }
    </React.Fragment>
  );                                          
};

export default TextBox;
