import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EnviarDatosAdministracionComponent } from './enviar-datos-administracion.component';

describe('EnviarDatosAdministracionComponent', () => {
  let component: EnviarDatosAdministracionComponent;
  let fixture: ComponentFixture<EnviarDatosAdministracionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EnviarDatosAdministracionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EnviarDatosAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
