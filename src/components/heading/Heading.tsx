
import React from 'react';
import { Heading } from '../../utils/types/types';

import ContentBox from '../box/ContentBox';
import TextBox from '../text';
import Button from '../button';


type Props = Heading & {
  classes?: string;
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
    classes,
    children 
  }
): JSX.Element => {
  return (
    <ContentBox styles={ styles && styles } classes={ classes && classes }>
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
