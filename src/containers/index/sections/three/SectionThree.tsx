
import Image from 'next/image';

import styles from './SectionThree.module.scss';

import Container from '../../../../components/container';
import ContentBox from '../../../../components/box';
import TextBox from '../../../../components/text';
import Button from '../../../../components/button';
import Tag from '../../../../components/tag/ProductTag';

type Props = {

};

const SectionThree: React.FunctionComponent<Props> = ({}): JSX.Element => {

  const testTagData = {
    img: {
      src: '/images/products/women/footwear/Sandal01.jpg',
      alt: 'women\'s sandal',
      width: 750,
      height: 750, 
    },
    txt: {
      heading: 'epilogue',
      subHeading: 'Women\'s leather platform espadrille'
    },
    btn: {
      text: 'Shop Women\'s Shoes',
      link: '/under-construction',
    },
    tag: {
      img: {
        src: '/images/products/women/footwear/Sandal-decal01.jpg',
        alt: 'handbag',
        width: 100,
        height: 100
      },
      txt: {
        heading: 'Espadrilles',
        body: 'Brought to life in black leather for the Epilogue collection is the espadrille sandal with a cord wedge-shaped heel.',
      },
      btn: {
        text: 'SHOP SHOES',
        link: '/under-construction'
      }
    }
  };

  return (
    <section className={`${ styles.wrapper} noselect`}>
      <Container main styles={ styles }>
        <ContentBox styles={ styles }>
          <Image 
            src={'/images/products/women/footwear/Sandal01.jpg'}
            alt={'woman\'s sandal'}
            width={ 750 }
            height={ 750 } />
          <TextBox
            headingTwo={'EPILOGUE'} 
            subHeadOne={'Women\'s leather platform espadrille'}
            styles={ styles } />
          <Button 
            text={'Shop Women\'s Shoes'}
            link={'/under-construction'}
            classes={'relative btn-hoverConfig btn-activeFocus'}
            styles={ styles } />
        </ContentBox>
        <Tag config={ testTagData.tag }/>
      </Container>
    </section>
  );
};

export default SectionThree;