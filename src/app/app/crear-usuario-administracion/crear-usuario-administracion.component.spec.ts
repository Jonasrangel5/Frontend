import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearUsuarioAdministracionComponent } from './crear-usuario-administracion.component';

describe('CrearUsuarioAdministracionComponent', () => {
  let component: CrearUsuarioAdministracionComponent;
  let fixture: ComponentFixture<CrearUsuarioAdministracionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearUsuarioAdministracionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearUsuarioAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
