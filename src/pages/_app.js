import '../styles';
import { Provider } from 'react-redux';
import { useStore } from '../redux-store';
import axios from 'axios';

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};
