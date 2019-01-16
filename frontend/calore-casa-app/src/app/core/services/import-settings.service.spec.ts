import { TestBed } from '@angular/core/testing';

import { ImportSettingsService } from './import-settings.service';

describe('ImportSettingsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImportSettingsService = TestBed.get(ImportSettingsService);
    expect(service).toBeTruthy();
  });
});
