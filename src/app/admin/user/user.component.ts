import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DanhsachnguoidungService } from 'src/app/core/service/danhsachnguoidung.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  danhSachNguoiDung: any[] = [];
  @ViewChild('formCapNhat') formCN: NgForm;

  constructor(private DSngDungSV: DanhsachnguoidungService) {}

  ngOnInit(): void {
    this.DSngDungSV.layDanhSachNguoiDung().subscribe({
      next: (result) => {
        console.log(result);
        this.danhSachNguoiDung = result;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  capNhatNG(value) {
    let obj1 = value;
    let obj2 = { maNhom: 'GP03' };

    let obj3 = Object.assign(obj1, obj2);
    console.log(obj3);
    this.DSngDungSV.ngDungChapNhat(obj3).subscribe({
      next: (result) => {
        console.log(result);
        alert('cập nhật thành công');
      },
      error: (err) => {
        console.log(err);
        alert('cập nhật Không thành công');
      },
    });
  }

  capNhat(btnCapNhat) {
    let TaiKhoan = btnCapNhat.getAttribute('data-taiKhoan');
    let MatKhau = btnCapNhat.getAttribute('data-matKhau');
    let HoTen = btnCapNhat.getAttribute('data-hoTen');
    let Email = btnCapNhat.getAttribute('data-email');
    let MaLoaiNguoiDung = btnCapNhat.getAttribute('data-maLoaiNguoiDung');
    let SoDt = btnCapNhat.getAttribute('data-soDt');

    this.formCN.setValue({
      taiKhoan: TaiKhoan,
      matKhau: MatKhau,
      hoTen: HoTen,
      email: Email,
      maLoaiNguoiDung: MaLoaiNguoiDung,
      soDt: SoDt,
    });
  }

  xoa(value) {
    console.log(value);
    this.DSngDungSV.xoaNguoiDung(value).subscribe({
      next: (result) => {
        console.log(result);
        alert('Xóa thành công');
      },
      error: (err) => {
        console.log(err);
        alert('xóa  thành công');
      },
    });
  }
}
