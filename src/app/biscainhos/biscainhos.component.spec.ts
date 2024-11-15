import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiscainhosComponent } from './biscainhos.component';

describe('BiscainhosComponent', () => {
  let component: BiscainhosComponent;
  let fixture: ComponentFixture<BiscainhosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiscainhosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BiscainhosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
