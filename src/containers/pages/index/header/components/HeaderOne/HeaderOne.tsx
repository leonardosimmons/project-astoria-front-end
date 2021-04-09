
import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';
import Container from '../../../../../../components/container';
import Video from '../../../../../../components/video';


type Props = {

};

const HeaderOne: React.FunctionComponent<Props> = (): JSX.Element => {

  return (
    <div id={'index-main-header-one'} className={ styles.wrapper }>
      <Container main styles={ styles }>
        <Video src={'/videos/women/WomenWithGun01.mp4'} />
        <Heading
          main
          heading={'EPILOGUE'}
          btnText={'SHOP NOW'}
          btnLink={'/under-construction'}
          styles={ styles }
        />
      </Container>
    </div>
  )
};

export default HeaderOne;

/**
   <Container main styles={ styles }>
    <Video src={'/videos/women/WomenWithGun01.mp4'} />
    <ContentBox styles={ styles }>
      <Text
        styles={ styles } 
        mainHeading={'EPILOGUE'}/>
      <Button
        styles={ styles }
        classes={`btn-hoverConfig btn-activeFocus relative`} 
        text={'SHOP NOW'}
        link={'/under-construction'}/>
    </ContentBox>
  </Container>
 */