import { TestBed, inject } from '@angular/core/testing';

import { CommitteeService } from './committee.service';

describe('CommitteeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommitteeService]
    });
  });

  it('should be created', inject([CommitteeService], (service: CommitteeService) => {
    expect(service).toBeTruthy();
  }));
});
