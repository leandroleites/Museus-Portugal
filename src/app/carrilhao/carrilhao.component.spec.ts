import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrilhaoComponent } from './carrilhao.component';

describe('CarrilhaoComponent', () => {
  let component: CarrilhaoComponent;
  let fixture: ComponentFixture<CarrilhaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrilhaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CarrilhaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
