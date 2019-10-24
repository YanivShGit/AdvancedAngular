import { TestBed } from '@angular/core/testing';

import { UsersProxyService } from './users-proxy.service';

describe('UsersProxyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersProxyService = TestBed.get(UsersProxyService);
    expect(service).toBeTruthy();
  });
});
