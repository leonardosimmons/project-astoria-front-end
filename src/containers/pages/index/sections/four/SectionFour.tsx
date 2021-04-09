
import { Button as ButtonType } from '../../../../../utils/types';

import styles from './SectionFour.module.scss';

import HeadingBox from '../../../../../components/heading/Heading';
import ContentBox from '../../../../../components/box/ContentBox';
import Button from '../../../../../components/button';
import TextBox from '../../../../../components/text';
import Section from '../../../../../components/section/Section';

type Props = {
  config: {
    text: {
      heading: string;
      lineOne: string;
    },
    btn: ButtonType
  }
};

const SectionFour: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Section styles={ styles }>
      <HeadingBox
        sub
        heading={ config.text.heading }
        textBelow={ config.text.lineOne }
        btnText={ config.btn.text.toUpperCase() }
        btnLink={ config.btn.link }
        btnClasses={'btn-activeFocus'}
        styles={ styles }/>
    </Section>
  );
};

export default SectionFour;

/**
  <ContentBox styles={ styles }>
    <TextBox 
      subHeadOne={ config.text.heading }
      textOne={ config.text.lineOne } 
      styles={ styles }/>
    <Button 
      link={ config.btn.link }
      text={ config.btn.text.toUpperCase() }
      styles={ styles }
      classes={'btn-activeFocus'}/>
  </ContentBox>
 */