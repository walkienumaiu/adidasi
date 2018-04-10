import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiAdidasiComponent } from './detalii-adidasi.component';

describe('DetaliiAdidasiComponent', () => {
  let component: DetaliiAdidasiComponent;
  let fixture: ComponentFixture<DetaliiAdidasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaliiAdidasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliiAdidasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
