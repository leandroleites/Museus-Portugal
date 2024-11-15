import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcertoSeisComponent } from './concerto-seis.component';

describe('ConcertoSeisComponent', () => {
  let component: ConcertoSeisComponent;
  let fixture: ComponentFixture<ConcertoSeisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConcertoSeisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConcertoSeisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
