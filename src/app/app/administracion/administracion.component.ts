import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-administracion',
  templateUrl: './administracion.component.html',
  styleUrls: ['./administracion.component.scss'],
  standalone:true, 
  imports:[IonicModule],
})
export class AdministracionComponent  implements OnInit {

  constructor(private router:Router,private nav:NavController) { }

  ngOnInit() {

  }
  public enviar_datos_administracion(){
    this.nav.navigateForward("/enviar_datos_administracion")
  
  
  }

}
