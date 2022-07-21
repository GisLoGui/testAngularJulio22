import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcularFechaComponent } from './calcular-fecha.component';

describe('CalcularFechaComponent', () => {
  let component: CalcularFechaComponent;
  let fixture: ComponentFixture<CalcularFechaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularFechaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcularFechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
