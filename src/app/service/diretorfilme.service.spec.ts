import { TestBed } from '@angular/core/testing';

import { DiretorfilmeService } from './diretorfilme.service';

describe('DiretorfilmeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiretorfilmeService = TestBed.get(DiretorfilmeService);
    expect(service).toBeTruthy();
  });
});
