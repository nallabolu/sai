import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SouthFoodComponent } from './south-food.component';

describe('SouthFoodComponent', () => {
  let component: SouthFoodComponent;
  let fixture: ComponentFixture<SouthFoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthFoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SouthFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
