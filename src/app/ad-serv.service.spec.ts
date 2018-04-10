import { TestBed, inject } from '@angular/core/testing';

import { AdServService } from './ad-serv.service';

describe('AdServService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdServService]
    });
  });

  it('should be created', inject([AdServService], (service: AdServService) => {
    expect(service).toBeTruthy();
  }));
});
