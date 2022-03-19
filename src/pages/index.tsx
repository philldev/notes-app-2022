import * as React from 'react';

import Layout from '@/components/layout/Layout';
import NoteList from '@/components/note-list/note-list';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <NoteList />
      </main>
    </Layout>
  );
}
