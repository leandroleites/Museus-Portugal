import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacoDuquesComponent } from './paco-duques.component';

describe('PacoDuquesComponent', () => {
  let component: PacoDuquesComponent;
  let fixture: ComponentFixture<PacoDuquesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PacoDuquesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PacoDuquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
