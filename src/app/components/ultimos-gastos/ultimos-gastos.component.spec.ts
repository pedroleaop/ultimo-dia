import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UltimosGastosComponent } from './ultimos-gastos.component';

describe('UltimosGastosComponent', () => {
  let component: UltimosGastosComponent;
  let fixture: ComponentFixture<UltimosGastosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UltimosGastosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UltimosGastosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
