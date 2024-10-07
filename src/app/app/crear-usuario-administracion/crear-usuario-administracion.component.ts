import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-crear-usuario-administracion',
  templateUrl: './crear-usuario-administracion.component.html',
  styleUrls: ['./crear-usuario-administracion.component.scss'],

  standalone:true, 
  imports:[IonicModule],

})
export class CrearUsuarioAdministracionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
