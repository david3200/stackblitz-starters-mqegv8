import { createSelector, createFeatureSelector } from '@ngrx/store';
import { NotebookState } from './notebook.reducer';

const selectNotesState = createFeatureSelector<NotebookState>('notebook');
