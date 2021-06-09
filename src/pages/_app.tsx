
import '../styles';
import '../styles/sass';
import { Provider } from 'react-redux';
import { useStore } from '../redux-store/store';
import type { AppProps } from 'next/app';
import { Provider as AuthProvider } from 'next-auth/client'


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
};
