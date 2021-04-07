
import styles from './SectionTwo.module.scss';

import Image from 'next/image';
import ContentBox from '../../../../components/box';
import Container from '../../../../components/container';
import Tag from '../../../../components/tag/ProductTag';
import TextBox from '../../../../components/text';
import Button from '../../../../components/button';

type Props = {

};


const SectionTwo: React.FunctionComponent<Props> = ({}): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <Container styles={ styles }>
     
      </Container>
      <ContentBox styles={ styles }>
        <TextBox 
          subHeadOne={'EPILOGUE'} 
          styles={ styles } />
        <TextBox 
          headingOne={'Men\'s Collection'} 
          styles={ styles } />
        <Button 
          text={'SHOP MEN\'S FASHION'}
          styles={ styles }
          classes={'btn-hoverConfig btn-activeFocus'}/>
      </ContentBox>
    </div>
  );
};

export default SectionTwo;