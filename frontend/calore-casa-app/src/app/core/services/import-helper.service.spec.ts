import { TestBed } from '@angular/core/testing';

import { ImportHelperService } from './import-helper.service';

describe('ImportHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportHelperService = TestBed.get(ImportHelperService);
    expect(service).toBeTruthy();
  });
});
