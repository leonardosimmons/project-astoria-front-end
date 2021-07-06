
import React from 'react';
import Image from 'next/image';
import { Product, ProductTag } from '../../../../../utils/types';

import styles from './SectionOne.module.scss';

import Section from '../../../../../components/section';
import Container from '../../../../../components/container';
import ContentBox from '../../../../../components/box';
import TextBox from '../../../../../components/text';
import Button from '../../../../../components/button';
import Tag from '../../../../../components/product/tag';


type Props = {
  config: Product;
};


const SectionOne: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  const [ tag ] = React.useState<ProductTag>({
    img: {
      src: config.preview.image.src,
      alt: config.preview.image.alt,
      width: 100,
      height: 100,
    },
    txt: { 
      heading: config.details.type.charAt(0).toUpperCase() + config.details.type.slice(1),
      body: config.details.desc.split('. ')[0]
    },
    btn: {
      text: `SHOP ${
        config.details.type === 'handbag'
        ? 'HANDBAGS'
        : config.details.type === 'gift'
          ? 'GIFTS'
          : config.details.type.toUpperCase()
      }`,
      link: config.details.type === 'handbag'
      ? '/handbags'
      : config.details.type === 'gift'
        ? '/gifts'
        : `/${config.details.type}`
    }
  });

  return (
    <Section styles={styles}>
      <Container main styles={styles}>
        <ContentBox styles={styles}>
          <Image
            priority
            src={config.preview.image.src}
            alt={config.preview.image.alt}
            width={650}
            height={650} />
          <TextBox
            headingTwo={'EPILOGUE'} 
            subHeadOne={config.details.name}
            styles={styles} />
          <Button
            text={tag.btn.text}
            link={tag.btn.link}
            classes={'relative btn-hoverConfig btn-activeFocus'}
            styles={styles} />
        </ContentBox>
        <Tag config={tag} />
      </Container>
    </Section>
  )
};

export default SectionOne;
