import * as React from 'react';
import { FiEdit } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import NoteList from '@/components/note-list/note-list';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <main>
        <div className='flex items-center justify-between p-2'>
          <h1 className='text-xl font-normal uppercase'>Note App</h1>
          <div className=''>
            <button className='flex h-10 w-10 items-center justify-center'>
              <FiEdit className='h-4 w-4' />
            </button>
          </div>
        </div>
        <NoteList />
      </main>
    </Layout>
  );
}
