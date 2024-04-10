import { TestBed } from '@angular/core/testing';

import { PizzaFileService } from './pizza-file.service';

describe('PizzaService', () => {
  let service: PizzaFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
