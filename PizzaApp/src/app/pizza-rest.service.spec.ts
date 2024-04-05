import { TestBed } from '@angular/core/testing';

import { PizzaRestService } from './pizza-rest.service';

describe('PizzaRestService', () => {
  let service: PizzaRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PizzaRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
