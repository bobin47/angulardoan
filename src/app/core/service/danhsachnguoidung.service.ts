import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NguoiDung } from '../models/nguoidung';

@Injectable({
  providedIn: 'root',
})
export class DanhsachnguoidungService {
  constructor(private http: HttpClient) {}

  layDanhSachNguoiDung(): Observable<any[]> {
    return this.http.get<any[]>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP03'
    );
  }

  themNguoiDung(nguoiDung: NguoiDung): Observable<NguoiDung> {
    return this.http.post<NguoiDung>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy',
      nguoiDung
    );
  }

  ngDungDangNhap(taiKhoan: any): Observable<any> {
    return this.http.post<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap',
      taiKhoan
    );
  }

  ngDungChapNhat(ngDung: any): Observable<any> {
    return this.http.put<any>(
      'https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      ngDung
    );
  }

  xoaNguoiDung(taiKhoan: any): Observable<any> {
    return this.http.delete<any>(
      `https://movie0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  }
}
