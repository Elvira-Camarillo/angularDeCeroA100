import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.services';





@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  // @Input() personajes: Personaje[] = [];

  get personajes(){
    return this.dbzServices.personajes
  }

  constructor( private dbzServices:DbzService ){}
 

}
