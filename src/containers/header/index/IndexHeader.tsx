
import Carousel from '../../../features/carousel/Carousel';
import HeaderOne from './components/HeaderOne/HeaderOne';
import HeaderTwo from './components/HeaderTwo';

type Props = {

};

const IndexHeader: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Carousel arrows autoPlay={ 12.5 } >
      <HeaderOne />
      <HeaderTwo />
    </Carousel>
  );
};

export default IndexHeader;