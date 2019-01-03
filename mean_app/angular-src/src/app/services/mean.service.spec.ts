import { TestBed, inject } from '@angular/core/testing';

import { MeanService } from './mean.service';

describe('MeanService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeanService]
    });
  });

  it('should be created', inject([MeanService], (service: MeanService) => {
    expect(service).toBeTruthy();
  }));
});
