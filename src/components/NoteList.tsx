import Link from 'next/link';
import { FC } from 'react';

import { Note } from '@/lib/notes/notes-types';

type NoteListProps = {
  notes: Note[];
};

const NoteList: FC<NoteListProps> = (props) => {
  return (
    <div className='space-y-4 p-2'>
      {props.notes.map((note) => (
        <Link key={note.id} passHref href={`/notes/${note.id}`}>
          <div className='rounded-md bg-slate-50 p-2 text-left shadow-sm'>
            <h3 className='mb-2 font-semibold'>{note.title}</h3>
            <p>{note.content.substring(0, 50)}</p>
          </div>
        </Link>
      ))}
      {props.notes.length === 0 && (
        <div className='rounded-md bg-slate-50 p-2 text-left text-slate-500 shadow-sm'>
          <p>No notes yet.</p>
        </div>
      )}
    </div>
  );
};

export default NoteList;
