import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotesRoutingModule } from './notes-routing.module';
import { NoteService } from 'src/services/notes/Note.service';
import { BrowserModule } from '@angular/platform-browser';
import { ListarComponent } from './listar/listar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModificarComponent } from './modificar/modificar.component';


@NgModule({
  declarations: [ListarComponent, AgregarComponent, ModificarComponent],
  imports: [
    // BrowserModule,
    CommonModule,
    NotesRoutingModule,
    FormsModule,
    // ReactiveFormsModule
  ],
  providers: [NoteService]
})
export class NotesModule { }
