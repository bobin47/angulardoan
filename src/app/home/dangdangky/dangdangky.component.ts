import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NguoiDung } from 'src/app/core/models/nguoidung';
import { DanhsachnguoidungService } from 'src/app/core/service/danhsachnguoidung.service';

@Component({
  selector: 'app-dangdangky',
  templateUrl: './dangdangky.component.html',
  styleUrls: ['./dangdangky.component.scss'],
})
export class DangdangkyComponent implements OnInit {
  mangNgDungDangKy: any[] = [];

  @ViewChild('formCapNhat') formCN: NgForm;

  constructor(
    private ngDungSV: DanhsachnguoidungService // private ngDung: NguoiDung
  ) {}
  DangKy(value: any) {
    console.log(value);
    this.ngDungSV.themNguoiDung(value).subscribe({
      error: (err) => {
        console.log(err);
      },
    });
    alert('đăng Ký thành công');
  }

  // xoa(value) {
  //   console.log(value);
  //   this.ngDungSV.xoaNguoiDung(value).subscribe({
  //     next: (result) => {
  //       console.log(result);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  // capNhat(btnCapNhat) {
  //   let TaiKhoan = btnCapNhat.getAttribute('data-taiKhoan');
  //   let MatKhau = btnCapNhat.getAttribute('data-matKhau');
  //   let HoTen = btnCapNhat.getAttribute('data-hoTen');
  //   let Email = btnCapNhat.getAttribute('data-email');
  //   let MaLoaiNguoiDung = btnCapNhat.getAttribute('data-maLoaiNguoiDung');
  //   let SoDt = btnCapNhat.getAttribute('data-soDt');

  //   this.formCN.setValue({
  //     taiKhoan: TaiKhoan,
  //     matKhau: MatKhau,
  //     hoTen: HoTen,
  //     email: Email,
  //     maLoaiNguoiDung: MaLoaiNguoiDung,
  //     soDt: SoDt,
  //   });
  // }

  // capNhatNG(value) {
  //   let obj1 = value;
  //   let obj2 = { maNhom: 'GP03' };

  //   let obj3 = Object.assign(obj1, obj2);
  //   console.log(obj3);
  //   this.ngDungSV.ngDungChapNhat(obj3).subscribe({
  //     next: (result) => {
  //       console.log(result);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }

  ngOnInit(): void {}
}
