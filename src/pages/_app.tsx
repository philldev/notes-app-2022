import { AppProps } from 'next/app';

import '@/styles/globals.css';

import { NotesProvider } from '@/lib/notes/notes';

/**
 * !STARTERCONF info
 * ? `Layout` component is called in every page using `np` snippets. If you have consistent layout across all page, you can add it here too
 */

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NotesProvider>
      <Component {...pageProps} />
    </NotesProvider>
  );
}

export default MyApp;
