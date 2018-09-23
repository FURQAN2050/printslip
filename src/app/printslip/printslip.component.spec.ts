import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintslipComponent } from './printslip.component';

describe('PrintslipComponent', () => {
  let component: PrintslipComponent;
  let fixture: ComponentFixture<PrintslipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintslipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
