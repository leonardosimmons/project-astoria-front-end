
import styles from './SectionFour.module.scss';

import ContentBox from '../../../../components/box/ContentBox';
import Button from '../../../../components/button';
import TextBox from '../../../../components/text';
import { Button as ButtonType } from '../../../../utils/types';

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
    <section className={`${ styles.wrapper } noselect`}>
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
    </section>
  );
};

export default SectionFour;
