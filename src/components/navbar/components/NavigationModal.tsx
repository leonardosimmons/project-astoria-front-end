import ReactDOM from 'react-dom';
import Modal from '../../modal/Modal';

type Props = {

}

const NavigationModal: React.FunctionComponent<Props> = (): JSX.Element => {
  return (
    <Modal>
      <div className="bg-white w-90/100 h-90/100 flex justify-center items-center">
        <div className="text-5xl">Test Test Test</div>
      </div>
    </Modal>
  );
};

export default NavigationModal;