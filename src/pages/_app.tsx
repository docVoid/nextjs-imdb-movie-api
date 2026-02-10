import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { WatchlistProvider } from '@/context/watchlistcontext';
import { ThemeProvider } from '@/context/themecontext';
import Layout from "@/components/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <WatchlistProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WatchlistProvider>
    </ThemeProvider>
  );
}
