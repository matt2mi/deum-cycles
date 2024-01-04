import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BespokeDetailsComponent } from './bespoke-details.component';

describe('BespokeDetailsComponent', () => {
  let component: BespokeDetailsComponent;
  let fixture: ComponentFixture<BespokeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BespokeDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BespokeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
