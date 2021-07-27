
import '../styles';
import '../styles/sass';
import type { AppProps } from 'next/app';
import { Provider as StateProvider } from 'react-redux';
import { useStore } from '../redux-store/store';
import { Provider as AuthProvider } from 'next-auth/client';
import { Elements } from '@stripe/react-stripe-js';
import { getStripeKey } from '../features/stripe/config';
import { loadStripe, Stripe } from '@stripe/stripe-js';


const stripePromise: Promise<Stripe | null> = getStripeKey().then((key: string | void) => loadStripe(key as string));

export default function App({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Elements stripe={stripePromise}>      
      <StateProvider store={store}>
        <AuthProvider session={pageProps.session}>
          <Component {...pageProps} />
        </AuthProvider>
      </StateProvider>
    </Elements>
  );
};
