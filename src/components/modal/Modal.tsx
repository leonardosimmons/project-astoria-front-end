import ReactDOM from 'react-dom';

const Modal: React.FunctionComponent = ({ children }): JSX.Element => {
  return (
    process.browser ? 
    ReactDOM.createPortal(
      { children }, 
      document.getElementById('modal-root') as HTMLElement
    )
    : <div className={'none'}>failed...</div>
  );
};

export default Modal;