import { TestBed, inject } from '@angular/core/testing';

import { UiBehaviourService } from './ui-behaviour.service';

describe('UiBehaviourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UiBehaviourService]
    });
  });

  it('should be created', inject([UiBehaviourService], (service: UiBehaviourService) => {
    expect(service).toBeTruthy();
  }));
});
