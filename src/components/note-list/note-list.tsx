import Link from 'next/link';
import { FC } from 'react';

const NoteList: FC = () => {
  return (
    <div className='space-y-4 p-2'>
      {new Array(10).fill(0).map((_, i) => (
        <Link key={i} passHref href='/notes/1'>
          <div className='rounded-md bg-slate-50 p-2 text-left shadow-sm'>
            <h3 className='mb-2 font-semibold'>Notes</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NoteList;
