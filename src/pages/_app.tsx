import Footer from '@/components/Footer';
import { store } from '@/redux/store';
import '@/styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import Headers from '@/components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
    <Provider store={store}>
      <Headers/>
    <Component {...pageProps} />
    <Footer/>
    </Provider>
    </ChakraProvider>
  );
}
