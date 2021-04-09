
import styles from './Header.module.scss';
import Heading from '../../../../../../components/heading';


type Props = {

};

const HeaderOne: React.FunctionComponent<Props> = (): JSX.Element => {

  return (
    <Heading
      main 
      id={'index-main-header-one'}
      heading={'EPILOGUE'}
      btnText={'SHOP NOW'}
      btnLink={'/under-construction'}
      videoURL={'/videos/women/WomenWithGun01.mp4'}
      styles={ styles }
    />
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