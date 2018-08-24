import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorthFoodComponent } from './north-food.component';

describe('NorthFoodComponent', () => {
  let component: NorthFoodComponent;
  let fixture: ComponentFixture<NorthFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorthFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorthFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
