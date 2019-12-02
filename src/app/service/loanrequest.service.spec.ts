import { TestBed } from '@angular/core/testing';

import { LoanrequestService } from './loanrequest.service';

describe('LoanrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanrequestService = TestBed.get(LoanrequestService);
    expect(service).toBeTruthy();
  });
});
