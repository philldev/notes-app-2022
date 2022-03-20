import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { FiArrowLeft, FiTrash } from 'react-icons/fi';
import { MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';
import useSWR, { mutate } from 'swr';

import { deleteNote, getNoteById, updateNote } from '@/lib/notes/notes';

import Layout from '@/components/layout/Layout';
import NoteDetail from '@/components/NoteDetail';
import Seo from '@/components/Seo';

export default function NotePage() {
  const router = useRouter();
  const routerRef = React.useRef<typeof router>(router);

  const { data: note } = useSWR(`note/${router.query.id}`, async () => {
    const note = await getNoteById(router.query.id as string);
    if (note) {
      return note;
    } else {
      routerRef.current.push('/notes');
    }
  });

  const onDeleteClick = () => {
    if (note) deleteNote(note.id);
    router.push('/');
  };

  if (!note) {
    return null;
  }

  return (
    <Layout>
      <Seo templateTitle='Note Title' />
      <main className='p-4'>
        <div className='mb-2 flex items-center justify-between'>
          <div>
            <Link href='/' passHref>
              <button className='flex h-10 w-10 items-center justify-center'>
                <FiArrowLeft className='h-4 w-4' />
              </button>
            </Link>
          </div>
          <div className='flex items-center'>
            {!note.archived && (
              <button
                onClick={() => {
                  updateNote({ ...note, archived: true });
                  mutate('note/' + note.id);
                }}
                className='flex h-10 w-10 items-center justify-center'
              >
                <MdOutlineArchive className='h-5 w-5' />
              </button>
            )}
            {note.archived && (
              <button
                onClick={() => {
                  updateNote({ ...note, archived: false });
                  mutate('note/' + note.id);
                }}
                className='flex h-10 w-10 items-center justify-center'
              >
                <MdOutlineUnarchive className='h-5 w-5' />
              </button>
            )}
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
