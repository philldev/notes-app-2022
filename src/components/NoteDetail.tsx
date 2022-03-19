import { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const NoteDetail: FC = () => {
  return (
    <div className='rounded-md bg-slate-50 p-2 shadow'>
      <div className='mb-2'>
        <input
          defaultValue='note title'
          className='w-full bg-transparent text-xl focus:outline-none'
        />
      </div>
      <div>
        <TextareaAutosize className='w-full resize-none border-none bg-transparent p-0 focus:ring-0' />
      </div>
    </div>
  );
};

export default NoteDetail;
