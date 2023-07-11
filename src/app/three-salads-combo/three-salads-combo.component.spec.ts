import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeSaladsComboComponent } from './three-salads-combo.component';

describe('ThreeSaladsComboComponent', () => {
  let component: ThreeSaladsComboComponent;
  let fixture: ComponentFixture<ThreeSaladsComboComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreeSaladsComboComponent]
    });
    fixture = TestBed.createComponent(ThreeSaladsComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
