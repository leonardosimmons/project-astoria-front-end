
import styles from './Appointment.module.scss';
import ContentBox from '../../../../components/box/ContentBox';
import Button from '../../../../components/button/Button';
import Container from '../../../../components/container/Container';
import TextBox from '../../../../components/text/Text';

type Props = {

};


const Appointment: React.FunctionComponent<Props> = ({}): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <ContentBox styles={ styles }>
        <TextBox 
          textOne={'YOUR PRIVATE EXPERIENCE AWAITS WITH'}
          textTwo={'AN INSTORE SHOPPING APPOINTMENT'}/>
        <TextBox 
          headingOne={'BOOK AN APPOINTMENT'}/>
        <Container styles={ styles }>
          <Button 
            text={'BOOK YOUR PRIVATE APPOINTMENT'}
            link={'/under-construction'} 
            styles={ styles }/>
          <div className={ styles.btnSpacer }></div>
          <Button 
            text={'DISCOVER OUR EXCLUSIVE SERVICES'}
            link={'/under-construction'}  
            styles={ styles }
            classes={'relative'}/>
        </Container>
      </ContentBox>
    </div>
  );
};

export default Appointment;