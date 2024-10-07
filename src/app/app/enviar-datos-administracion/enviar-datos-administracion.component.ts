import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-enviar-datos-administracion',
  templateUrl: './enviar-datos-administracion.component.html',
  styleUrls: ['./enviar-datos-administracion.component.scss'],
  standalone:true, 
  imports:[IonicModule],
})
export class EnviarDatosAdministracionComponent  implements OnInit {
  info: any =null;
  constructor(private router: Router) { }

  ngOnInit() {
  
  }
  

}
