import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { WatchlistProvider } from '@/context/watchlistcontext';
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WatchlistProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WatchlistProvider>
  );
}
