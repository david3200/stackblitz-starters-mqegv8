import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NotesService } from './services/notes.service';
import { RouterModule } from '@angular/router';
import { NotebookComponent } from './notebook/notebook.component';
import { notebookReducer } from './store/notebook.reducer';
import { StoreModule } from '@ngrx/store';
import { NotebookEffects } from './store/notebook.effects';
import { EffectsModule } from '@ngrx/effects';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './notebook/note/note.component';
import { SearchComponent } from './notebook/search/search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{ path: '**', component: WelcomeComponent }]),
    StoreModule.forRoot({}),
    StoreModule.forFeature('notebook', notebookReducer),
    EffectsModule.forRoot([NotebookEffects]),
  ],
  declarations: [
    AppComponent,
    WelcomeComponent,
    HeaderComponent,
    NotebookComponent,
    NoteComponent,
    SearchComponent,
  ],
  bootstrap: [AppComponent],
  providers: [NotesService],
})
export class AppModule {}
