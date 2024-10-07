import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-crear-usuario-paciente',
  templateUrl: './crear-usuario-paciente.component.html',
  styleUrls: ['./crear-usuario-paciente.component.scss'],

  standalone:true, 
  imports:[IonicModule],

})
export class CrearUsuarioPacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
