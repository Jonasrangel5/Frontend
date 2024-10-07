import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-enviar-datos-paciente',
  templateUrl: './enviar-datos-paciente.component.html',
  styleUrls: ['./enviar-datos-paciente.component.scss'],

  standalone:true, 
  imports:[IonicModule],

})
export class EnviarDatosPacienteComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
