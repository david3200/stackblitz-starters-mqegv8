import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../../services/notes.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  @Input()
  public note: Note;

  constructor() {}

  ngOnInit() {}
}
