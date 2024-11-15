import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MafraComponent } from './mafra.component';

describe('MafraComponent', () => {
  let component: MafraComponent;
  let fixture: ComponentFixture<MafraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MafraComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MafraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
