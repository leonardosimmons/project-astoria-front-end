
import ReactDOM from 'react-dom';

type Props = {
  zIndex?: number;
  clicked?: () => void;
};

const Backdrop: React.FunctionComponent<Props> = ({ zIndex, clicked }) => 
  ReactDOM.createPortal(
    <div 
      className={`backdrop`} 
      style={{ zIndex: zIndex }} 
      onClick={ clicked } 
    />,
    ( document.getElementById('backdrop-root') as HTMLElement )
  );


export default Backdrop;