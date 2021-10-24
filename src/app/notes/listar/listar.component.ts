import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { INote } from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss'],
})
export class ListarComponent implements OnInit {


  // notas: Observable<INote[]>;
  notas: Array<INote>;

  constructor(private notesService:NoteService, private navCtr: NavController) { }

  ngOnInit() {
    this.notas = this.notesService.obtenerNotas();
    // if (this.notas) {
    //   console.log(this.notas);
      
    // }
  }

  public navAgregar(){
    this.navCtr.navigateForward("notas/agregar");
  }

  // METODOS

  public eliminarNota(id:number){
    this.notesService.eliminarNota(id);
    console.log(this.notesService.obtenerNotas());
    
  }

  public buscarNota(id:number){
    this.navCtr.navigateForward("notas/modificar/"+id);
  }
}