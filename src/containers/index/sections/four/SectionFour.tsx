
import ContentBox from '../../../../components/box/ContentBox';
import Button from '../../../../components/button/Button';
import TextBox from '../../../../components/text/Text';
import styles from './SectionFour.module.scss';

type Props = {
  
};

const SectionFour: React.FunctionComponent<Props> = ({}): JSX.Element => {
  return (
    <div className={ styles.wrapper }>
      <ContentBox styles={ styles }>
        <TextBox 
          subHeadOne={'The Epilogue Campaign'}
          textOne={'Shot during a twelve hour live stream from the backstage, the Epilogue campaign.'} 
          styles={ styles }/>
        <Button 
          link={'/under-construction'}
          text={'DISCOVER MORE'}
          styles={ styles }
          classes={'btn-activeFocus'}/>
      </ContentBox>
    </div>
  );
};

export default SectionFour;