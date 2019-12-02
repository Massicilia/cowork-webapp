import { TestBed } from '@angular/core/testing';

import { MealtrayService } from './mealtray.service';

describe('MealtrayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MealtrayService = TestBed.get(MealtrayService);
    expect(service).toBeTruthy();
  });
});
