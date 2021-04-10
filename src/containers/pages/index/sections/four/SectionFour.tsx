
import { Button as ButtonType, Header } from '../../../../../utils/types';

import styles from './SectionFour.module.scss';

import HeadingBox from '../../../../../components/heading/Heading';
import Section from '../../../../../components/section/Section';

type Props = {
  config: Header;
};

const SectionFour: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Section styles={ styles }>
      <HeadingBox
        sub
        heading={ config.heading }
        textBelow={ config.textOne }
        btnText={ config.btn.text.toUpperCase() }
        btnLink={ config.btn.link }
        btnClasses={'btn-activeFocus'}
        styles={ styles }
      />
    </Section>
  );
};

export default SectionFour;
