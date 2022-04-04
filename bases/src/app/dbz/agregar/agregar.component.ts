import { Component, Input,  Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.services';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent  {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor( private dbzServices: DbzService ){ }

  agregar(){
    if(this.nuevo.nombre.trim().length === 0) {return;}
    
    this.dbzServices.agregarPersonajes(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    } 
    
  }

}
