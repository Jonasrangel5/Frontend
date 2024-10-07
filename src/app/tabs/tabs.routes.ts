import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { LoginComponent } from '../app/login/login.component';
import { UsuarioComponent } from '../app/usuario/usuario.component';
import { CrearusuarioComponent } from '../app/crearusuario/crearusuario.component';
import { PacienteComponent } from '../app/paciente/paciente.component';
import { AdministracionComponent } from '../app/administracion/administracion.component';
import { CrearUsuarioAdministracionComponent } from '../app/crear-usuario-administracion/crear-usuario-administracion.component';
import { CrearUsuarioPacienteComponent } from '../app/crear-usuario-paciente/crear-usuario-paciente.component';
import { EnviarDatosPacienteComponent } from '../app/enviar-datos-paciente/enviar-datos-paciente.component';
import { EnviarDatosAdministracionComponent } from '../app/enviar-datos-administracion/enviar-datos-administracion.component';


export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        component: LoginComponent
        
      },
      {
        path: 'tab2',
      component:CrearusuarioComponent
      },
      {
        path: 'tab3',
      component:UsuarioComponent
      },
      {
        path: 'tab4',
      component:CrearusuarioComponent
      },

      {
        path: 'tab5',
      component:PacienteComponent
      },

      {
        path: 'tab6',
      component:AdministracionComponent
      },
      {
        path: 'tab7',
      component:CrearUsuarioAdministracionComponent
      },
      {
        path: 'tab8',
      component:CrearUsuarioPacienteComponent
      },
      {
        path: 'tab9',
      component:EnviarDatosPacienteComponent
      },
      {
        path: 'tab10',
      component:EnviarDatosAdministracionComponent
      },
     
    
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
