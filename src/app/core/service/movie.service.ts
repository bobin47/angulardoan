import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private http: HttpClient) {}

  layDanhSachPhim(): Observable<Movie[]> {
    return this.http.get<Movie[]>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03 '
    );
  }

  layChiTietPhim(maPhim: string): Observable<any> {
    return this.http.get<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`
    );
  }

  capNhatPhim(phim: any): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/CapNhatPhim',
      phim
    );
  }

  themPhim(phim: any): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhim',
      phim
    );
  }

  XoaPhim(maPhim: any): Observable<any> {
    return this.http.delete<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`
    );
  }

  datve(khachHangDatve: any): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe',
      khachHangDatve
    );
  }
}
