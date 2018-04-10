import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdidasiComponent } from './adidasi.component';

describe('AdidasiComponent', () => {
  let component: AdidasiComponent;
  let fixture: ComponentFixture<AdidasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdidasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdidasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
