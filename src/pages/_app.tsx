//import '../styles';
//import '../styles/sass';
import { Provider } from 'react-redux';
import { useStore } from '../redux-store/store';
import type { AppProps } from 'next/app';


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
};
