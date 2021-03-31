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
      { mainHeading && <h1 className={`${ styles && styles.mainHeading } ${ parent || '' }--main-heading ${ mainHeadingClasses || '' }`}>{ mainHeading }</h1> }
      { headingOne && <h2 className={`${ styles && styles.headingOne } ${ parent || '' }--heading-1 ${ headingOneClasses || '' }`}>{ headingOne }</h2> }
      { headingTwo && <h2 className={`${ styles && styles.headingTwo } ${ parent || '' }--heading-2 ${ headingTwoClasses || '' }`}>{ headingTwo }</h2> }
      { subHeadOne && <h3 className={`${ styles && styles.subHeadingOne } ${ parent || '' }--sub-heading-1 ${ subHeadOneClasses || '' }`}>{ subHeadOne }</h3> }
      { subHeadTwo && <h3 className={`${ styles && styles.subHeadingTwo } ${ parent || '' }--sub-heading-2 ${ subHeadTwoClasses || '' }`}>{ subHeadTwo }</h3> }
      { textOne && <p className={`${ styles && styles.textOne } ${ parent || '' }--text-1 ${ textOneClasses || '' }`}>{ textOne }</p> }
      { textTwo && <p className={`${ styles && styles.textTwo } ${ parent || '' }--text-2 ${ textTwoClasses || '' }`}>{ textTwo }</p> }
      { textThree && <p className={`${ styles && styles.textThree } ${ parent || '' }--text-3 ${ textThreeClasses || '' }`}>{ textThree }</p> }
      { textFour && <p className={`${ styles && styles.textFour } ${ parent || '' }--text-4 ${ textFourClasses || '' }`}>{ textFour }</p> }
      { textFive && <p className={`${ styles && styles.textFive } ${ parent || '' }--text-5 ${ textFiveClasses || '' }`}>{ textFive }</p> }
      { spanOne && <p className={`${ styles && styles.spanOne } ${ parent || '' }--span-1 ${ spanOneClasses || '' }`}>{ spanOne }</p> }
      { spanTwo && <p className={`${ styles && styles.spanTwo } ${ parent || '' }--span-2 ${ spanTwoClasses || '' }`}>{ spanTwo }</p> }
      { spanThree && <p className={`${ styles && styles.spanThree } ${ parent || '' }--span-3 ${ spanThreeClasses || '' }`}>{ spanThree }</p> }
      { spanFour && <p className={`${ styles && styles.spanFour } ${ parent || '' }--span-4 ${ spanFourClasses || '' }`}>{ spanFour }</p> }
      { spanFive && <p className={`${ styles && styles.spanFive } ${ parent || '' }--span-5 ${ spanFiveClasses || '' }`}>{ spanFive }</p> }
    </React.Fragment>
  );                                          
};

export default TextBox;
