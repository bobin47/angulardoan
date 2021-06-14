import { TestBed } from '@angular/core/testing';

import { LichChieuService } from './lich-chieu.service';

describe('LichChieuService', () => {
  let service: LichChieuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LichChieuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
