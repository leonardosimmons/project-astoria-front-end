
import React from 'react';
import Image from 'next/image';
import { IndexSectionOneData } from '../../../utils/types';

import styles from './SectionOne.module.scss';

import Container from '../../../components/container';
import ContentBox from '../../../components/box';
import TextBox from '../../../components/text';
import Button from '../../../components/button';
import Tag from '../../../components/tag/ProductTag';


type Props = {
  config: IndexSectionOneData;
};


const SectionOne: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  /* --------------------  RENDER  -------------------- */ 
  return (
    <section className={`${ styles.wrapper} noselect`}>
      <Container main styles={ styles }>
        <ContentBox styles={ styles }>
          <Image 
            src={ config.img.src }
            alt={ config.img.alt }
            width={ config.img.width }
            height={ config.img.height } />
          <TextBox
            headingTwo={ config.txt.heading.toUpperCase() } 
            subHeadOne={ config.txt.subHeading }
            styles={ styles } />
          <Button 
            text={ config.btn.text.toUpperCase() }
            link={ config.btn.link }
            classes={'relative btn-hoverConfig btn-activeFocus'}
            styles={ styles } />
        </ContentBox>
        <Tag config={ config.tag } />
      </Container>
    </section>
  )
};

export default SectionOne;