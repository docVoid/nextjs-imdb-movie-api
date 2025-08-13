import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { WatchlistProvider } from '@/context/watchlistcontext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WatchlistProvider>
      <Component {...pageProps} />
    </WatchlistProvider>
  );
}
