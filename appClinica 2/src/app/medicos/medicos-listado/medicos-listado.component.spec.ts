import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosListadoComponent } from './medicos-listado.component';

describe('MedicosListadoComponent', () => {
  let component: MedicosListadoComponent;
  let fixture: ComponentFixture<MedicosListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
