import { useRouter } from 'next/router';
import * as React from 'react';
import { FiEdit } from 'react-icons/fi';
import useSWR, { mutate } from 'swr';

import { today } from '@/lib/helper';
import { addNote, createEmptyNote, getNotes } from '@/lib/notes/notes';

import Layout from '@/components/layout/Layout';
import NoteList from '@/components/NoteList';
import Seo from '@/components/Seo';

export default function HomePage() {
  const { data: notes } = useSWR('notes', () => {
    return getNotes();
  });

  const router = useRouter();

  const onAddNoteClick = async () => {
    const note = createEmptyNote();
    await addNote(note);
    mutate('notes');
    router.push(`/notes/${note.id}`);
  };

  return (
    <Layout>
      <Seo />
      <main className='p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <span className='text-slate-500'>{today()}</span>
          <div className=''>
            <button
              onClick={onAddNoteClick}
              className='flex h-10 w-10 items-center justify-center'
            >
              <FiEdit className='h-4 w-4' />
            </button>
          </div>
        </div>
        {notes && notes.length > 0 && (
          <NoteList notes={notes.filter((i) => !i.archived)} />
        )}
      </main>
    </Layout>
  );
}
