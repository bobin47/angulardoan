import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-trangchitiet',
  templateUrl: './trangchitiet.component.html',
  styleUrls: ['./trangchitiet.component.scss'],
})
export class TrangchitietComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private movieService: MovieService
  ) {}
  chiTietPhim: any = [];

  loaiChiTiet: string = 'thongTin';

  chonThongTin(val) {
    this.loaiChiTiet = val;
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (params) => {
        this.movieService.layChiTietPhim(params.id).subscribe({
          next: (result) => {
            this.chiTietPhim = result;
            console.log(this.chiTietPhim);
          },
        });
      },
    });
  }
}
