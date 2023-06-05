import { Component, OnInit } from '@angular/core';
import { Note } from '../services/notes.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css'],
})
export class NotebookComponent implements OnInit {
  public notes: Note[] = [];
  public isLoading: boolean;

  constructor() {}

  public ngOnInit() {}
}
