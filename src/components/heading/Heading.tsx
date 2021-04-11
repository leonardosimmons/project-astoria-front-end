
import React from 'react';

import ContentBox from '../box/ContentBox';
import TextBox from '../text/Text';
import Button from '../button/Button';
import { Heading } from '../../utils/types/types';


type Props = Heading & {
  styles?: any;
  main?: boolean;
  sub?: boolean;
};


const BaseHeading: React.FunctionComponent<Props> = (
  { 
    btn,
    main,
    sub,
    heading,
    textAbove,
    textBelow, 
    styles,
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
      {
        btn?.text &&
        <Button
          styles={ styles }
          text={ btn.text }
          link={ btn.link }
          classes={`relative ${ btn.classes ? btn.classes : 'btn-hoverConfig btn-activeFocus'}`}
        />
      }
    </ContentBox>
  );
};

export default BaseHeading;
