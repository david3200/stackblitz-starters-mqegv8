import { createReducer, on, Action } from '@ngrx/store';
import { Note } from '../services/notes.service';

export interface NotebookState {
  notes: Note[];
  loading: boolean;
}

export const initialState: NotebookState = {
  notes: [],
  loading: false,
};

const notesbookReducer = createReducer(initialState);

export function notebookReducer(
  state: NotebookState | undefined,
  action: Action
) {
  return notesbookReducer(state, action);
}
