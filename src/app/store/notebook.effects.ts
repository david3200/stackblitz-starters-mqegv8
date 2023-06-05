import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { NotesService } from '../services/notes.service';

@Injectable()
export class NotebookEffects {
  constructor(private actions$: Actions, private notesService: NotesService) {}
}
