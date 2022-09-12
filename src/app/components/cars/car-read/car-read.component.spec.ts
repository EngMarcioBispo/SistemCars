import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarReadComponent } from './car-read.component';

describe('CarReadComponent', () => {
  let component: CarReadComponent;
  let fixture: ComponentFixture<CarReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarReadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
