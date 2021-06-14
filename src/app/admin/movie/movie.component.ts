import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MovieService } from 'src/app/core/service/movie.service';
import { Movie } from '../../core/models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  danhSachPhim: Movie[] = [];
  @ViewChild('formCapNhatPhim') formPhimCN: NgForm;
  constructor(private DSphimSV: MovieService) {}

  ngOnInit(): void {
    this.DSphimSV.layDanhSachPhim().subscribe({
      next: (result) => {
        this.danhSachPhim = result;
        console.log(this.danhSachPhim);
      },
    });
  }
  capNhatMovie(value) {
    let obj1 = value;
    let obj2 = { maNhom: 'GP03' };

    let obj3 = Object.assign(obj1, obj2);
    console.log(obj3);

    this.DSphimSV.capNhatPhim(value).subscribe({
      next: (result) => {
        console.log(result);
        alert('cập Nhật thành công');
      },
      error: (err) => {
        console.log(err);
        alert('Cập nhật không thành công');
      },
    });
  }
  XoaPhim(maPhim) {
    console.log(maPhim);
    this.DSphimSV.XoaPhim(maPhim).subscribe({
      next: (res) => {
        console.log(res);
        alert('Xóa thành công');
      },
      error: (err) => {
        console.log(err);
        alert('Xóa thành công');
      },
    });
  }

  layDataPhim(value) {
    let tenphim = value.getAttribute('data-tenPhim');
    let mota = value.getAttribute('data-mota');
    let hinhanh = value.getAttribute('data-hinhAnh');
    let ngaykhoichieu = value.getAttribute('data-ngayKhoiChieu');
    let danhgia = value.getAttribute('data-danhGia');
    let trailer = value.getAttribute('data-trailer');
    let bidanh = value.getAttribute('data-bidanh');
    let maphim = value.getAttribute('data-maPhim');
    console.log(tenphim);
    this.formPhimCN.setValue({
      tenPhim: tenphim,
      moTa: mota,
      hinhAnh: hinhanh,
      ngayKhoiChieu: ngaykhoichieu,
      danhGia: danhgia,
      trailer: trailer,
      biDanh: bidanh,
      maPhim: maphim,
    });
  }
}
