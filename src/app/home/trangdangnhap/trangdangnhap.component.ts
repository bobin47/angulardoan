import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DanhsachnguoidungService } from 'src/app/core/service/danhsachnguoidung.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangdangnhap',
  templateUrl: './trangdangnhap.component.html',
  styleUrls: ['./trangdangnhap.component.scss'],
})
export class TrangdangnhapComponent implements OnInit {
  dangNhapForm: FormGroup;

  constructor(
    private ngDungSV: DanhsachnguoidungService,
    private router: Router
  ) {
    this.dangNhapForm = new FormGroup({
      taiKhoan: new FormControl(''),
      matKhau: new FormControl(''),
    });
  }

  ngOnInit(): void {
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { maLoaiNguoiDung } = JSON.parse(userInfo);
      if (maLoaiNguoiDung === 'KhachHang') {
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/admin']);
      }
    }
  }

  dangNhap() {
    console.log(this.dangNhapForm.value);
    this.ngDungSV.ngDungDangNhap(this.dangNhapForm.value).subscribe({
      next: (result) => {
        console.log(result);
        localStorage.setItem('userInfo', JSON.stringify(result));
        alert('dang Nhap thanh cong');

        if (result.maLoaiNguoiDung === 'KhachHang') {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/admin']);
        }
      },
      error: (err) => {
        alert('đăng nhập k đúng');
      },
    });
  }
}
