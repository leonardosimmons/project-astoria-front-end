import React from 'react';
import { Text } from '../../utils/types';

type Props = {
  parent?: string;
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
      { mainHeading && <h1 className={`${ parent || '' }--main-heading ${ mainHeadingClasses || '' }`}>{ mainHeading }</h1> }
      { headingOne && <h2 className={`${ parent || '' }--heading-1 ${ headingOneClasses || '' }`}>{ headingOne }</h2> }
      { headingTwo && <h2 className={`${ parent || '' }--heading-2 ${ headingTwoClasses || '' }`}>{ headingTwo }</h2> }
      { subHeadOne && <h3 className={`${ parent || '' }--sub-heading-1 ${ subHeadOneClasses || '' }`}>{ subHeadOne }</h3> }
      { subHeadTwo && <h3 className={`${ parent || '' }--sub-heading-2 ${ subHeadTwoClasses || '' }`}>{ subHeadTwo }</h3> }
      { textOne && <p className={`${ parent || '' }--text-1 ${ textOneClasses || '' }`}>{ textOne }</p> }
      { textTwo && <p className={`${ parent || '' }--text-2 ${ textTwoClasses || '' }`}>{ textTwo }</p> }
      { textThree && <p className={`${ parent || '' }--text-3 ${ textThreeClasses || '' }`}>{ textThree }</p> }
      { textFour && <p className={`${ parent || '' }--text-4 ${ textFourClasses || '' }`}>{ textFour }</p> }
      { textFive && <p className={`${ parent || '' }--text-5 ${ textFiveClasses || '' }`}>{ textFive }</p> }
      { spanOne && <p className={`${ parent || '' }--span-1 ${ spanOneClasses || '' }`}>{ spanOne }</p> }
      { spanTwo && <p className={`${ parent || '' }--span-2 ${ spanTwoClasses || '' }`}>{ spanTwo }</p> }
      { spanThree && <p className={`${ parent || '' }--span-3 ${ spanThreeClasses || '' }`}>{ spanThree }</p> }
      { spanFour && <p className={`${ parent || '' }--span-4 ${ spanFourClasses || '' }`}>{ spanFour }</p> }
      { spanFive && <p className={`${ parent || '' }--span-5 ${ spanFiveClasses || '' }`}>{ spanFive }</p> }
    </React.Fragment>
  );                                          
};

export default TextBox;
