import { TestBed, inject } from '@angular/core/testing';

import { AcademicFacilitiesService } from './academic-facilities.service';

describe('AcademicFacilitiesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AcademicFacilitiesService]
    });
  });

  it('should be created', inject([AcademicFacilitiesService], (service: AcademicFacilitiesService) => {
    expect(service).toBeTruthy();
  }));
});
