import { TestBed } from '@angular/core/testing';

import { UsersDetailsService } from './users-details.service';

describe('UsersDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersDetailsService = TestBed.get(UsersDetailsService);
    expect(service).toBeTruthy();
  });
});
