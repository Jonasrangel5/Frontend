import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
  standalone:true, 
  imports:[IonicModule, ReactiveFormsModule],

  providers: [AuthService]
})
export class UsuarioComponent  implements OnInit {

  public loginForm: FormGroup;
  constructor(private router:Router,private nav:NavController, 
    private auth:AuthService, private fb: FormBuilder,
  private loading: LoadingController) { 
      this.loginForm = this.fb.group({
        NombreUsuario: ['', Validators.required],
        Contrasena: ['', Validators.required]
      })
    }

  ngOnInit() {

  }

  public async ingresar_usuario_paciente(){
    const loading = await this.loading.create({
      message: 'Iniciando sesion...',
    });

    loading.present();
    this.auth.doLogin(this.loginForm.value)
    .subscribe(async (e) => {
      if(e.token != null || e.token != ''){
        await loading.dismiss()
        this.nav.navigateForward("/paciente")
      }else{
        await loading.dismiss();
        
      }
    })

}

public ingresar_usuario_administracion(){
  this.nav.navigateForward("/administracion")

}

}
