import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicosEditarComponent } from './medicos-editar.component';

describe('MedicosEditarComponent', () => {
  let component: MedicosEditarComponent;
  let fixture: ComponentFixture<MedicosEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicosEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
