import React from "react";

type Props = {
  parent?: string;
  mainHeading?: string | JSX.Element | HTMLElement;
  headingOne?: string | JSX.Element | HTMLElement;
  headingTwo?: string | JSX.Element | HTMLElement;
  subHeadOne?:string | JSX.Element | HTMLElement;
  subHeadTwo?: string | JSX.Element | HTMLElement;
  textOne?: string | JSX.Element | HTMLElement;
  textTwo?: string | JSX.Element | HTMLElement;
  textThree?: string | JSX.Element | HTMLElement;
  textFour?: string | JSX.Element | HTMLElement;
  textFive?: string | JSX.Element | HTMLElement;
  mainHeadingClasses?: string;
  headingOneClasses?: string;
  headingTwoClasses?: string;
  subHeadOneClasses?: string;
  subHeadTwoClasses?: string;
  textOneClasses?: string;
  textTwoClasses?: string;
  textThreeClasses?: string;
  textFourClasses?: string;
  textFiveClasses?: string;
}

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
    mainHeadingClasses,
    headingOneClasses,
    headingTwoClasses,
    subHeadOneClasses,
    subHeadTwoClasses,
    textOneClasses,
    textTwoClasses,
    textThreeClasses,
    textFourClasses,
    textFiveClasses
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
    </React.Fragment>
  );                                          
};

export default TextBox;
