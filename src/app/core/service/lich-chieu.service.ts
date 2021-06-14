import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LichChieuService {
  constructor(private http: HttpClient) {}

  layChiTietPhongVe(maLichChieu): Observable<any> {
    return this.http.get<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`
    );
  }
}
