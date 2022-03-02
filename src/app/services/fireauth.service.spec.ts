import { TestBed } from '@angular/core/testing';

import { FireAuthService } from './fireauth.service';

describe('AuthServiceService', () => {
  let service: FireAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
