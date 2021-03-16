
import ReactDOM from 'react-dom';

type Props = {
  clicked?: () => void;
};

const Backdrop: React.FunctionComponent<Props> = ({ clicked }) => 
  ReactDOM.createPortal(
    <div className={`backdrop`} onClick={ clicked }/>,
    ( document.getElementById('backdrop-root') as HTMLElement )
  );


export default Backdrop;