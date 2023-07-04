import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientOptionsComponent } from './ingredient-options.component';

describe('IngredientOptionsComponent', () => {
  let component: IngredientOptionsComponent;
  let fixture: ComponentFixture<IngredientOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientOptionsComponent]
    });
    fixture = TestBed.createComponent(IngredientOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
