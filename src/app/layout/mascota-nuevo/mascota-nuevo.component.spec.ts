import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotaNuevoComponent } from './mascota-nuevo.component';

describe('MascotaNuevoComponent', () => {
  let component: MascotaNuevoComponent;
  let fixture: ComponentFixture<MascotaNuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotaNuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MascotaNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
