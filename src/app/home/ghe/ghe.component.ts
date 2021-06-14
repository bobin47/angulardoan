import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LichChieuService } from 'src/app/core/service/lich-chieu.service';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss'],
})
export class GheComponent implements OnInit {
  @Input() danhSachGhe;

  public maLichChieu;
  public mangMoi = [];
  public danhSachGheDangDat: any[] = [];
  public ve: any[] = [];

  public soGheConLai = 0;
  public soGheDaDat = 0;

  constructor(
    private activate: ActivatedRoute,
    private lichChieu: LichChieuService,
    private movieSV: MovieService
  ) {}

  datGheParent(value, ghe) {
    let ve: { MaGhe: number; GiaVe: number } = {
      MaGhe: ghe.maGhe,
      GiaVe: ghe.giaVe,
    };

    if (value) {
      this.soGheConLai--;
      this.soGheDaDat++;
      this.danhSachGheDangDat.push(ghe);
      this.ve.push(ve);
      console.log(this.danhSachGheDangDat);
      console.log(this.ve);
    } else {
      this.soGheConLai++;
      this.soGheDaDat--;
      for (let index in this.danhSachGheDangDat) {
        //console.log(index);
        if (this.danhSachGheDangDat[index].maGhe == ghe.maGhe) {
          this.danhSachGheDangDat.splice(parseInt(index), 1);
        }
      }
      for (let iVe in this.ve) {
        if (this.ve[iVe].MaGhe === ve.MaGhe) {
          this.ve.splice(parseInt(iVe), 1);
        }
      }
      console.log(this.danhSachGheDangDat);
      console.log(this.ve);
    }
  }

  ngOnInit(): void {
    this.activate.params.subscribe({
      next: (result) => {
        //console.log(result);
        this.maLichChieu = result.maLichChieu;
        this.lichChieu.layChiTietPhongVe(this.maLichChieu).subscribe({
          next: (resultLichChieu) => {
            console.log(resultLichChieu);
            this.danhSachGhe = resultLichChieu.danhSachGhe;
            this.mangMoi = this.danhSachGhe.slice(0, 60);
            console.log(this.mangMoi);

            for (let i of this.mangMoi) {
              if (i.daDat === true) {
                this.soGheDaDat++;
              } else {
                this.soGheConLai++;
              }
            }
          },
        });
      },
    });
  }

  layTaiKhoanNguoiDung() {
    const userInfo = localStorage.getItem('userInfo');
    const { taiKhoan } = JSON.parse(userInfo);
    let NguoiDung: string = taiKhoan;
    if (userInfo !== null) {
      return NguoiDung;
    } else {
      console.log('dang nhap de vao dat ve');
    }
  }

  datVe() {
    let NguoiDung = this.layTaiKhoanNguoiDung();
    let khacHangDatve: {
      maLichChieu: number;
      danhSachVe: any[];
      taiKhoanNguoiDung: string;
    } = {
      maLichChieu: this.maLichChieu,
      danhSachVe: this.ve,
      taiKhoanNguoiDung: NguoiDung,
    };

    console.log(khacHangDatve);

    this.movieSV.datve(khacHangDatve).subscribe({
      next: (resutl) => {
        console.log(resutl);
      },
      error: (err) => err,
    });
    alert('đặt vé thành công');
  }
}
