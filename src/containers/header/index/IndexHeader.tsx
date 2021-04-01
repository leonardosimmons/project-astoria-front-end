
import Carousel from '../../../features/carousel/Carousel';
import HeaderOne from './components/HeaderOne/HeaderOne';
import HeaderTwo from './components/HeaderTwo';

type Props = {

};

const IndexHeader: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Carousel autoPlay={ 6 }>
      <HeaderOne />
      <HeaderTwo />
    </Carousel>
  );
};

export default IndexHeader;