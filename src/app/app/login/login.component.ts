import { provideHttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone:true,
  providers:[AuthService],

  imports:[IonicModule]
})
export class LoginComponent  implements OnInit {
  

  constructor(private router:Router,private nav:NavController, private auth:AuthService) { }

  ngOnInit() {
    
  }
public crear_usuario(){
  this.nav.navigateForward("/crear_usuario")

}
public paciente(){
  this.nav.navigateForward("/paciente")

}

public administracion(){
  this.nav.navigateForward("/administracion")

}

public usuario(){
  this.nav.navigateForward("/usuario")

}
}