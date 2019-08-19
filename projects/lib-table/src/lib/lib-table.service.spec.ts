import { TestBed } from '@angular/core/testing';

import { LibTableService } from './lib-table.service';

describe('LibTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibTableService = TestBed.get(LibTableService);
    expect(service).toBeTruthy();
  });
});
