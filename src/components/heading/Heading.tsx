
import React from 'react';

import Container from '../container/Container';
import ContentBox from '../box/ContentBox';
import Video from '../video/Video';
import TextBox from '../text/Text';
import Button from '../button/Button';


type Props = {
  id: string;
  btnText: string;
  btnLink: string;
  styles: any;
  main?: boolean;
  sub?: boolean;
  heading?: string | JSX.Element | HTMLElement;
  textAbove?: string | JSX.Element | HTMLElement;
  textBelow?: string | JSX.Element | HTMLElement;
  videoURL?: string;
};


const Heading: React.FunctionComponent<Props> = (
  { 
    id,
    btnText,
    btnLink,
    main,
    sub,
    heading,
    textAbove,
    textBelow, 
    styles, 
    videoURL,
    children 
  }
): JSX.Element => {
  return (
    <div id={ id } className={ styles.wrapper }>
      <Container main styles={ styles }>
        { videoURL && <Video src={ videoURL as string } /> }
          <ContentBox styles={ styles }>
            { children ||
              <React.Fragment>
                {
                  textAbove &&
                  <TextBox 
                    styles={ styles }
                    headingOne={ textAbove }
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
                    textOne={ textBelow }
                  />
                }
              </React.Fragment>
            }
            <Button
              styles={ styles }
              text={ btnText }
              link={ btnLink }
              classes={`relative btn-hoverConfig btn-activeFocus`}/>
          </ContentBox>
      </Container>
    </div>
  );
};

export default Heading;
