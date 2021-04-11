
import { Heading } from '../../../../../utils/types';

import styles from './SectionFour.module.scss';

import HeadingBox from '../../../../../components/heading/Heading';
import Section from '../../../../../components/section/Section';

type Props = {
  config: Heading;
};

const SectionFour: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <Section styles={ styles }>
      <HeadingBox
        sub
        heading={ config.heading }
        textBelow={ config.textOne as string }
        btn={ config.btn }
        styles={ styles }
      />
    </Section>
  );
};

export default SectionFour;
