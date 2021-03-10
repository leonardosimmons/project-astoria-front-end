import { Fragment } from "react";

interface IProps {
  parent?: string;
  mainHeading?: string | JSX.Element;
  headingOne?: string | JSX.Element;
  headingTwo?: string | JSX.Element;
  subHeadOne?:string | JSX.Element;
  subHeadTwo?: string | JSX.Element;
  textOne?: string | JSX.Element;
  textTwo?: string | JSX.Element;
  textThree?: string | JSX.Element;
  textFour?: string | JSX.Element;
  textFive?: string | JSX.Element;
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

const TextBox: React.FunctionComponent<IProps> = (
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
    <Fragment>
      { mainHeading && <h1 className={`${ parent || '' }__main-heading ${ mainHeadingClasses || '' }`}>{ mainHeading }</h1> }
      { headingOne && <h2 className={`${ parent || '' }__heading--1 ${ headingOneClasses || '' }`}>{ headingOne }</h2> }
      { headingTwo && <h2 className={`${ parent || '' }__heading--2 ${ headingTwoClasses || '' }`}>{ headingTwo }</h2> }
      { subHeadOne && <h3 className={`${ parent || '' }__sub-heading--1 ${ subHeadOneClasses || '' }`}>{ subHeadOne }</h3> }
      { subHeadTwo && <h3 className={`${ parent || '' }__sub-heading--2 ${ subHeadTwoClasses || '' }`}>{ subHeadTwo }</h3> }
      { textOne && <p className={`${ parent || '' }__text--1 ${ textOneClasses || '' }`}>{ textOne }</p> }
      { textTwo && <p className={`${ parent || '' }__text--2 ${ textTwoClasses || '' }`}>{ textTwo }</p> }
      { textThree && <p className={`${ parent || '' }__text--3 ${ textThreeClasses || '' }`}>{ textThree }</p> }
      { textFour && <p className={`${ parent || '' }__text--4 ${ textFourClasses || '' }`}>{ textFour }</p> }
      { textFive && <p className={`${ parent || '' }__text--5 ${ textFiveClasses || '' }`}>{ textFive }</p> }
    </Fragment>
  );                                          
};

export default TextBox;
