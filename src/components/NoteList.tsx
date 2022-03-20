import Link from 'next/link';
import { FC } from 'react';

import { Note } from '@/lib/notes/notes-types';

type NoteListProps = {
  notes: Note[];
};

const NoteList: FC<NoteListProps> = (props) => {
  return (
    <div className='space-y-2'>
      {props.notes.map((note) => (
        <Link key={note.id} passHref href={`/notes/${note.id}`}>
          <div className='rounded-md border border-slate-200 bg-slate-50 p-2 text-left shadow-sm'>
            <h3 className='mb-1 font-normal'>{note.title}</h3>
            <p className='text-slate-600'>{note.content.substring(0, 50)}</p>
          </div>
        </Link>
      ))}
      {props.notes.length === 0 && (
        <div className='text-slate-500'>
          <p>No notes yet.</p>
        </div>
      )}
    </div>
  );
};

export default NoteList;
