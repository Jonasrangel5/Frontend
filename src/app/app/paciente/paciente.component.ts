import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, NavController } from '@ionic/angular';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.scss'],
  standalone:true, 
  imports:[IonicModule, ReactiveFormsModule],
})
export class PacienteComponent  implements OnInit {

  
  pacienteform: FormGroup;
  constructor(private router:Router,private nav:NavController, private fb: FormBuilder) {
    this.pacienteform = this.fb.group({
      type: ['', Validators.required],
      evolution: ['', Validators.required],
      exercises: ['', Validators.required],
      comments: ['', Validators.required],
    })
   }

  ngOnInit() {

  }
  public enviar_datos_paciente(){
    this.router.navigate(['/enviar_datos_paciente']);
  
  }

}
