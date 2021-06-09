
import '../styles';
import '../styles/sass';
import type { AppProps } from 'next/app';
import { Provider as StateProvider } from 'react-redux';
import { useStore } from '../redux-store/store';
import { Provider as AuthProvider } from 'next-auth/client'


export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <StateProvider store={store}>
      <AuthProvider session={pageProps.session}>
        <Component {...pageProps} />
      </AuthProvider>
    </StateProvider>
  )
};
