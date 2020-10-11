import { TestBed } from '@angular/core/testing';

import { OkrsService } from './okrs.service';

describe('OkrsService', () => {
  let service: OkrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OkrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
