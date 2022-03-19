import Link from 'next/link';
import * as React from 'react';
import { FiArchive, FiArrowLeft, FiTrash } from 'react-icons/fi';

import Layout from '@/components/layout/Layout';
import NoteDetail from '@/components/NoteDetail';
import Seo from '@/components/Seo';

export default function Note() {
  return (
    <Layout>
      <Seo templateTitle='Note Title' />
      <main className='p-2'>
        <div className='mb-2 flex items-center justify-between'>
          <div>
            <Link href='/' passHref>
              <button className='flex h-10 w-10 items-center justify-center'>
                <FiArrowLeft className='h-4 w-4' />
              </button>
            </Link>
          </div>
          <div className='flex items-center'>
            <button className='flex h-10 w-10 items-center justify-center'>
              <FiArchive className='h-4 w-4' />
            </button>
            <button className='flex h-10 w-10 items-center justify-center'>
              <FiTrash className='h-4 w-4' />
            </button>
          </div>
        </div>
        <NoteDetail />
      </main>
    </Layout>
  );
}
