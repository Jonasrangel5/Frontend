import { Routes } from '@angular/router';
import { LoginComponent } from './app/login/login.component';
import { CrearusuarioComponent } from './app/crearusuario/crearusuario.component';
import { PacienteComponent } from './app/paciente/paciente.component';
import { AdministracionComponent } from './app/administracion/administracion.component';
import { UsuarioComponent } from './app/usuario/usuario.component';
import { CrearUsuarioAdministracionComponent } from './app/crear-usuario-administracion/crear-usuario-administracion.component';
import { CrearUsuarioPacienteComponent } from './app/crear-usuario-paciente/crear-usuario-paciente.component';
import { EnviarDatosPacienteComponent } from './app/enviar-datos-paciente/enviar-datos-paciente.component';
import { EnviarDatosAdministracionComponent } from './app/enviar-datos-administracion/enviar-datos-administracion.component';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },

  {
    path: 'login',
    component:LoginComponent
  },

  {
    path: 'crear_usuario',
    component:CrearusuarioComponent
  },

  {
    path: 'paciente',
    component:PacienteComponent
  },

  {
    path: 'administracion',
    component:AdministracionComponent
  },

  {
    path: 'usuario',
    component:UsuarioComponent
  },

  {
    path: 'crear_usuario_administracion',
    component:CrearUsuarioAdministracionComponent
  },

  {
    path: 'crear_usuario_paciente',
    component:CrearUsuarioPacienteComponent
  },
  {
    path: 'enviar_datos_paciente',
    component:EnviarDatosPacienteComponent
  },
  {
    path: 'enviar_datos_administracion',
    component:EnviarDatosAdministracionComponent
  },


];
