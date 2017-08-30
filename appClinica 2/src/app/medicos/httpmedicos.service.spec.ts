import { TestBed, inject } from '@angular/core/testing';

import { HttpmedicosService } from './httpmedicos.service';

describe('HttpmedicosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpmedicosService]
    });
  });

  it('should be created', inject([HttpmedicosService], (service: HttpmedicosService) => {
    expect(service).toBeTruthy();
  }));
});
