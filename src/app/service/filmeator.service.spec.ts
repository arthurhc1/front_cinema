import { TestBed } from '@angular/core/testing';

import { FilmeatorService } from './filmeator.service';

describe('FilmeatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmeatorService = TestBed.get(FilmeatorService);
    expect(service).toBeTruthy();
  });
});
