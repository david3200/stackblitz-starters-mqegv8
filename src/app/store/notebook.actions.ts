import { createAction, props } from '@ngrx/store';
import { Note } from '../services/notes.service';

export const loadNotes = createAction(
  '[Notebook] Load Notes',
  props<{ query?: string }>()
);
export const loadNotesSuccess = createAction(
  '[Notebook] Load Notes Success',
  props<{ notes: Note[] }>()
);
