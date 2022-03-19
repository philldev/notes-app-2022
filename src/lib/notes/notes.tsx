import * as React from 'react';

import { Note } from './notes-types';

const LOCAL_STORAGE_KEY = 'notes-app__data';

interface NoteContext {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
  updateNote: (note: Note) => void;
}

type Action =
  | {
      type: 'ADD_NOTE';
      payload: Note;
    }
  | {
      type: 'REMOVE_NOTE';
      payload: string;
    }
  | {
      type: 'UPDATE_NOTE';
      payload: Note;
    }
  | {
      type: 'SET_NOTES';
      payload: Note[];
    };

type NoteReducer = (state: Note[], action: Action) => Note[];

const noteReducer: NoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_NOTE':
      return [...state, action.payload];
    case 'REMOVE_NOTE':
      return state.filter((note) => note.id !== action.payload);
    case 'UPDATE_NOTE':
      return state.map((note) => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      });
    case 'SET_NOTES':
      return action.payload;
    default:
      return state;
  }
};

const NotesCtx = React.createContext<NoteContext | null>(null);

export const NotesProvider: React.FC = ({ children }) => {
  const [notes, dispatch] = React.useReducer<NoteReducer>(noteReducer, []);

  const addNote = (note: Note) => {
    dispatch({
      type: 'ADD_NOTE',
      payload: note,
    });
  };

  const removeNote = (id: string) => {
    dispatch({
      type: 'REMOVE_NOTE',
      payload: id,
    });
  };

  const updateNote = (note: Note) => {
    dispatch({
      type: 'UPDATE_NOTE',
      payload: note,
    });
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const notes = window.localStorage.getItem(LOCAL_STORAGE_KEY);
      if (notes) {
        dispatch({
          type: 'SET_NOTES',
          payload: JSON.parse(notes),
        });
      }
    }
  }, []);

  React.useEffect(() => {
    if (typeof window !== 'undefined')
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesCtx.Provider
      value={{
        notes,
        addNote,
        removeNote,
        updateNote,
      }}
    >
      {children}
    </NotesCtx.Provider>
  );
};

export const useNotes = () => {
  const context = React.useContext(NotesCtx);
  if (context === null) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
