
import React from 'react';

import ContentBox from '../box/ContentBox';
import TextBox from '../text/Text';
import Button from '../button/Button';


type Props = {
  btnText: string;
  btnLink: string;
  styles: any;
  main?: boolean;
  sub?: boolean;
  heading?: string | JSX.Element | HTMLElement;
  textAbove?: string | JSX.Element | HTMLElement;
  textBelow?: string | JSX.Element | HTMLElement;
  videoURL?: string;
  btnClasses?: string;
};


const BaseHeading: React.FunctionComponent<Props> = (
  { 
    btnText,
    btnLink,
    main,
    sub,
    heading,
    textAbove,
    textBelow, 
    styles, 
    btnClasses,
    children 
  }
): JSX.Element => {
  return (
    <ContentBox styles={ styles }>
      { children ||
        <React.Fragment>
          {
            textAbove &&
            <TextBox 
              styles={ styles }
              textOne={ textAbove }
            />
          }
          {
            main ?
            <TextBox
              styles={ styles } 
              mainHeading={ heading }
            />
            :
            sub ?
            <TextBox
              styles={ styles } 
              subHeadOne={ heading }
            />
            :
            <TextBox
              styles={ styles } 
              headingOne={ heading }
            />
          }
          {
            textBelow &&
            <TextBox 
              styles={ styles }
              textTwo={ textBelow }
            />
          }
        </React.Fragment>
      }
      <Button
        styles={ styles }
        text={ btnText }
        link={ btnLink }
        classes={`relative ${ btnClasses ? btnClasses : 'btn-hoverConfig btn-activeFocus'}`}/>
    </ContentBox>
  );
};

export default BaseHeading;
