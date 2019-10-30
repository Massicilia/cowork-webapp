import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanrequestCreationComponent } from './loanrequest-creation.component';

describe('LoanrequestCreationComponent', () => {
  let component: LoanrequestCreationComponent;
  let fixture: ComponentFixture<LoanrequestCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanrequestCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanrequestCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
