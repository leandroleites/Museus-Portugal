import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlataoComponent } from './platao.component';

describe('PlataoComponent', () => {
  let component: PlataoComponent;
  let fixture: ComponentFixture<PlataoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlataoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlataoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
