import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiogoSousaComponent } from './diogo-sousa.component';

describe('DiogoSousaComponent', () => {
  let component: DiogoSousaComponent;
  let fixture: ComponentFixture<DiogoSousaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiogoSousaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DiogoSousaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
