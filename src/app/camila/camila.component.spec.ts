import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CamilaComponent } from './camila.component';

describe('CamilaComponent', () => {
  let component: CamilaComponent;
  let fixture: ComponentFixture<CamilaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CamilaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CamilaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
