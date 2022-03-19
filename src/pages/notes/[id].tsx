import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiArchive, FiArrowLeft, FiTrash } from 'react-icons/fi';

import { getNoteById, useNotes } from '@/lib/notes/notes';
import { Note } from '@/lib/notes/notes-types';

import Layout from '@/components/layout/Layout';
import NoteDetail from '@/components/NoteDetail';
import Seo from '@/components/Seo';

export default function NotePage() {
  const router = useRouter();
  const { removeNote } = useNotes();

  const [note, setNote] = React.useState<Note | null>();

  const onDeleteClick = () => {
    if (note) removeNote(note.id);
    router.push('/');
  };

  const routerRef = React.useRef<typeof router>(router);

  React.useEffect(() => {
    const fetchNote = async () => {
      const note = getNoteById(router.query.id as string);
      if (note) setNote(note);
      else routerRef.current.push('/');
    };
    fetchNote();
  }, [router.query.id]);

  if (!note) return null;

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
            <button
              onClick={onDeleteClick}
              className='flex h-10 w-10 items-center justify-center'
            >
              <FiTrash className='h-4 w-4' />
            </button>
          </div>
        </div>
        <NoteDetail note={note} />
      </main>
    </Layout>
  );
}
