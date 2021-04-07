
import { Heading } from '../../../../utils/types';

import styles from './SectionTwo.module.scss';

import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import Tag from '../../../../components/tag/ProductTag';
import TextBox from '../../../../components/text';
import Button from '../../../../components/button';

type Props = {
  config: Heading;
};


const SectionTwo: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  console.log(config);
  return (
    <div className={ styles.wrapper }>
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
          classes={'btn-hoverConfig btn-activeFocus'}/>
      </ContentBox>
    </div>
  );
};

export default SectionTwo;