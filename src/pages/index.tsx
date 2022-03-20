import { useRouter } from 'next/router';
import * as React from 'react';
import { FiEdit } from 'react-icons/fi';

import { createEmptyNote, useNotes } from '@/lib/notes/notes';

import Layout from '@/components/layout/Layout';
import NoteList from '@/components/NoteList';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { notes, addNote } = useNotes();

  const router = useRouter();

  const onAddNoteClick = () => {
    const note = createEmptyNote();
    addNote(note);
    router.push(`/notes/${note.id}`);
  };

  return (
    <Layout>
      <Seo />
      <main className='p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <h1 className='font-md text-2xl font-normal uppercase'>Notes</h1>
          <div className=''>
            <button
              onClick={onAddNoteClick}
              className='flex h-10 w-10 items-center justify-center'
            >
              <FiEdit className='h-4 w-4' />
            </button>
          </div>
        </div>
        <NoteList notes={notes} />
      </main>
    </Layout>
  );
}
