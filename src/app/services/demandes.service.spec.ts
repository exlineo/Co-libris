import { TestBed, inject } from '@angular/core/testing';

import { DemandesService } from './demandes.service';

describe('DemandesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandesService]
    });
  });

  it('should be created', inject([DemandesService], (service: DemandesService) => {
    expect(service).toBeTruthy();
  }));
});
