import { TestBed } from '@angular/core/testing';

import { UsersBlService } from './users-bl.service';

describe('UsersBlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsersBlService = TestBed.get(UsersBlService);
    expect(service).toBeTruthy();
  });
});
