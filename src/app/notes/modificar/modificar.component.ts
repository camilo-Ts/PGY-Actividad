import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { INote } from 'src/interfaces/notes/INote';
import { NoteService } from 'src/services/notes/Note.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss'],
})
export class ModificarComponent implements OnInit {

  private nota:INote;

  private idNota:number;

  public titulo: string;
  public descripcion: string;
  public fechaVen: Date;
  
  constructor(private parametroUrl:ActivatedRoute, private navCtr:NavController, private notaService:NoteService) { }

  ngOnInit() {
    this.idNota = parseInt(this.parametroUrl.snapshot.paramMap.get('id'));
    console.log(this.idNota);
    
  }
  public navListar(){
    this.navCtr.navigateForward('notas')
  }


  /**
   * modificarNota
   */
  public modificarNota() {
    // this.notaService.modificarNota.
    this.nota = this.notaService.buscarNota(this.idNota);

    this.nota.titulo = this.titulo;
    this.nota.descripcion = this.descripcion;
    this.nota.fechaVencimiento = this.fechaVen;

    this.notaService.modificarNota(this.idNota, this.nota);
    
  }
  public cambioFecha(evento){
    this.fechaVen = evento.detail.value;
  }

  /**
   * imprimir
   */
  public imprimir() {
    console.log(this.idNota);
    
  }

}
