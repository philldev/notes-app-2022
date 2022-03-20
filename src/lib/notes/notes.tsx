import { Note } from './notes-types';
import { uuid } from '../helper';

const LOCAL_STORAGE_KEY = 'notes-app__data';

export const createEmptyNote = (): Note => ({
  id: uuid(),
  title: 'Untitled',
  content: '',
});

export const getNotes = async (): Promise<Note[]> => {
  const ls = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (ls) {
    return JSON.parse(ls) as Note[];
  }
  return [];
};

export const getNoteById = async (id: string): Promise<Note | undefined> => {
  const ls = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (ls) {
    const notes = JSON.parse(ls) as Note[] | undefined;
    if (notes) {
      return notes.find((note) => note.id === id);
    }
    return undefined;
  }
};

export const updateNote = async (note: Note) => {
  const ls = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (ls) {
    const notes = JSON.parse(ls) as Note[] | undefined;
    if (notes) {
      const updatedNotes = notes.map((n) => {
        if (n.id === note.id) {
          return note;
        }
        return n;
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNotes));
    }
  }
};

export const deleteNote = async (id: string) => {
  const ls = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (ls) {
    const notes = JSON.parse(ls) as Note[] | undefined;
    if (notes) {
      const updatedNotes = notes.filter((note) => note.id !== id);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNotes));
    }
  }
};

export const addNote = async (note: Note): Promise<void> => {
  const ls = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (ls) {
    const notes = JSON.parse(ls) as Note[] | undefined;
    if (notes) {
      const newNotes = [...notes, note];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newNotes));
    } else {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([note]));
    }
  }
};
