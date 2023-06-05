import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

export class Note {
  id: string;
  text: string;
  complete: boolean;

  constructor(text: string) {
    this.id = crypto.randomUUID();
    this.text = text;
    this.complete = false;
  }
}

export enum submitStatus {
  success = 'success',
  fail = 'fail',
}

@Injectable()
export class NotesService {
  private notes: Note[] = [
    new Note('Meeting at 2 pm.'),
    new Note('Buy milk and eggs.'),
    new Note('Call mom tomorrow.'),
    new Note('Pick up dry cleaning.'),
    new Note('Book flight for NYC.'),
    new Note('Pay phone bill by Friday.'),
    new Note('Finish report by Monday.'),
    new Note('Dentist appointment on Thursday.'),
    new Note('Buy birthday gift for Sarah.'),
    new Note('Send email to John ASAP.'),
  ];

  public getNotes(query?: string): Observable<Note[]> {
    const result = query
      ? of(this.notes).pipe(
          map((notes) =>
            notes.filter((n) =>
              n.text.toLowerCase().includes(query.toLowerCase())
            )
          ),
          tap((n) => console.log(n))
        )
      : of(this.notes);
    return result.pipe(delay(500));
  }

  public deleteNoteById(id: string): Observable<void> {
    this.notes = this.notes.filter((note) => note.id !== id);
    return of();
  }
}
