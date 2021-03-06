import debounce from 'debounce';
import * as React from 'react';
import { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

import { updateNote } from '@/lib/notes/notes';
import { Note } from '@/lib/notes/notes-types';

type NoteDetailProps = {
  note: Note;
};

const NoteDetail: FC<NoteDetailProps> = (props) => {
  const [title, setTitle] = React.useState(props.note.title);
  const [content, setContent] = React.useState(props.note.content);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceUpdateNote = React.useCallback(
    debounce((note: Note) => {
      updateNote(note);
    }, 1000),
    [updateNote]
  );

  React.useEffect(() => {
    debounceUpdateNote({ ...props.note, title, content });
  }, [content, debounceUpdateNote, props.note, title]);

  return (
    <div className='rounded-md bg-slate-50 p-2 shadow'>
      <div className='mb-1'>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className='w-full bg-transparent text-base focus:outline-none'
        />
      </div>
      <div>
        <TextareaAutosize
          value={content}
          placeholder='Enter your note here...'
          onChange={(e) => setContent(e.target.value)}
          className='w-full resize-none border-none bg-transparent p-0 text-sm focus:ring-0'
        />
      </div>
    </div>
  );
};

export default NoteDetail;
