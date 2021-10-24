import { Injectable } from '@angular/core';
import { INote } from 'src/interfaces/notes/INote';

@Injectable()
export class NoteService {
    private notes: Array<INote>;

    constructor(){
        this.notes = Array<INote>();
    }

    public obtenerNotas(): Array<INote>{
        return this.notes;
    }

    public agregarNota(nuevaNota: INote): INote {
        nuevaNota.id = this.notes.length+1;
        nuevaNota.fechaCreacion = new Date();
        this.notes.push(nuevaNota);
        return nuevaNota;
    }
    public eliminarNota(id: number){
        // for(let iterador = 0; iterador< this.notes.length; iterador++){
        //     if(this.notes[iterador].id === id){
        //         this.notes.slice(iterador, 1);
        //         break;
        //     }
        // }
        this.notes = this.notes.filter((note) => note.id !== id);

        // this.notes = this.notes.filter(function(note){
        //     return note.id !== id;
        // })
    }
    public modificarNota(id: number, notaM: INote){

        console.log(notaM);
        
        for(let nota of this.notes){
            console.log(id);
            console.log(nota.id);
            
            if(nota.id === id){
                nota.descripcion = notaM.descripcion;
                nota.titulo = notaM.titulo;
                nota.estado = notaM.estado;

                console.log(this.notes);
                
                break;
            }
        }
    }

    /**
     * buscarNota
     */
    public buscarNota(id:number): INote{
        // let nota:INote={titulo:"",descripcion:"",estado:"ACTIVO",fechaVencimiento:new Date()};
        let nota:INote=undefined;
        // let nota:any;

        for (let i = 0; i < this.notes.length; i++) {
            nota = this.notes[i];
            
        }
        // console.log(nota);
        
        return nota;
    }
}