import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import { INote } from 'src/interfaces/notes/INote';
import {INote} from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss'],
})
export class AgregarComponent implements OnInit {

  // nota:INote = {
  //   titulo: '',
  //   descripcion: '',
  //   fechaVencimiento: new Date(),
  //   estado: "ACTIVO"
  // };

  public titulo: string;
  public descripcion: string;
  public fechaVen: Date;


  constructor(private notesService:NoteService, private navCtr:NavController) { }

  ngOnInit() {}

  // Navegacion
  public navListar(){
    this.navCtr.navigateForward('notas')
  }
  // METODOS

  

  public crearNota(){
    const nota: INote = {
      descripcion: this.descripcion,
      estado: "ACTIVO",
      fechaVencimiento: this.fechaVen,
      titulo: this.titulo,
  }


    // this.nota.estado = "ACTIVO";

    
    this.notesService.agregarNota(nota);
    console.log(this.notesService.obtenerNotas());
    console.log(this.fechaVen);
    
  }

  imprimir(){
    console.log(this.fechaVen);
    
  }

  cambioFecha(evento){
    this.fechaVen = evento.detail.value;
  }


}
