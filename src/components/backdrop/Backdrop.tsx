
import ReactDOM from 'react-dom';

type Props = {
  styles?: string;
  zIndex?: number;
  clicked?: () => void;
};

const Backdrop: React.FunctionComponent<Props> = ({ zIndex, clicked, styles }): JSX.Element => {
  return (
    ReactDOM.createPortal(
      <div 
        className={ styles || '' } 
        style={{ zIndex: zIndex }} 
        onClick={ clicked } 
      />,
      document.getElementById('backdrop-root') as HTMLElement
    )
  );
};

export default Backdrop;