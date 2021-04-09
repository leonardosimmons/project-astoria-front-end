
import { Heading } from '../../../../utils/types';

import styles from './SectionTwo.module.scss';

import Section from '../../../../components/section';
import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import Tag from '../../../../components/product/tag';
import TextBox from '../../../../components/text';
import Button from '../../../../components/button';

type Props = {
  config: Heading;
};


const SectionTwo: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Section styles={ styles }>
      <Container styles={ styles }>
     
      </Container>
      <ContentBox styles={ styles }>
        <TextBox 
          subHeadOne={ config.text.subHeadOne } 
          styles={ styles } />
        <TextBox 
          headingOne={ config.text.headingOne } 
          styles={ styles } />
        <Button 
          styles={ styles }
          text={ config.btn.text }
          link={ config.btn.link }
          classes={'relative btn-hoverConfig btn-activeFocus'}/>
      </ContentBox>
    </Section>
  );
};

export default SectionTwo;
