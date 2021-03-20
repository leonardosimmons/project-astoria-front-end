import ReactDOM from 'react-dom';

const Modal: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    ReactDOM.createPortal(
      { children }, 
      document.getElementById('modal-root') as HTMLElement
    )
  );
};

export default Modal;