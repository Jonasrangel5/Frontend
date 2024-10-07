import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.component.html',
  styleUrls: ['./crearusuario.component.scss'],
  standalone:true, 
  imports:[IonicModule],
})
export class CrearusuarioComponent  implements OnInit {

  constructor(private router:Router,private nav:NavController) { }

  ngOnInit() {

  }

  public crear_usuario_paciente(){
    this.nav.navigateForward("/crear_usuario_paciente")

}

public crear_usuario_administracion(){
  this.nav.navigateForward("/crear_usuario_administracion")

}
}