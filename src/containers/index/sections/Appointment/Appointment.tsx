
import { Button as ButtonType } from '../../../../utils/types';

import styles from './Appointment.module.scss';

import ContentBox from '../../../../components/box/ContentBox';
import Button from '../../../../components/button';
import Container from '../../../../components/container';
import TextBox from '../../../../components/text';


type Props = {
  config: {
    text: {
      heading: string;
      lineOne: string;
      lineTwo: string;
    }
    btnOne: ButtonType;
    btnTwo: ButtonType;
  }
};


const Appointment: React.FunctionComponent<Props> = ({ config }): JSX.Element => {
  return (
    <section className={`${ styles.wrapper } noselect`}>
      <ContentBox styles={ styles }>
        <TextBox 
          textOne={ config.text.lineOne.toUpperCase() }
          textTwo={ config.text.lineTwo.toUpperCase() }
          styles={ styles }/>
        <TextBox 
          headingOne={ config.text.heading.toUpperCase() }
          styles={ styles }/>
        <Container styles={ styles }>
          <Button 
            text={ config.btnOne.text.toUpperCase() }
            link={ config.btnOne.link } 
            styles={ styles }/>
          <div className={ styles.btnSpacer }></div>
          <Button 
            text={ config.btnTwo.text.toUpperCase()}
            link={ config.btnTwo.link }  
            styles={ styles }
            classes={'relative'}/>
        </Container>
      </ContentBox>
    </section>
  );
};

export default Appointment;
