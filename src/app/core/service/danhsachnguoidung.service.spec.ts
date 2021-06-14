import { TestBed } from '@angular/core/testing';

import { DanhsachnguoidungService } from './danhsachnguoidung.service';

describe('DanhsachnguoidungService', () => {
  let service: DanhsachnguoidungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DanhsachnguoidungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
