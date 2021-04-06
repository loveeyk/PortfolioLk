import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhoneframeComponent } from './phoneframe.component';

describe('PhoneframeComponent', () => {
  let component: PhoneframeComponent;
  let fixture: ComponentFixture<PhoneframeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhoneframeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhoneframeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
