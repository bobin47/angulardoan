import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/core/service/movie.service';

@Component({
  selector: 'app-themphim',
  templateUrl: './themphim.component.html',
  styleUrls: ['./themphim.component.scss'],
})
export class ThemphimComponent implements OnInit {
  hien: boolean = false;
  constructor(private movieSV: MovieService) {}

  showThemPhim() {
    this.hien = !this.hien;
  }

  ThemPhim(value) {
    let obj1 = value;
    let obj2 = { maNhom: 'GP03' };
    let obj3 = Object.assign(obj1, obj2);
    console.log(obj3);

    this.movieSV.themPhim(value).subscribe({
      next: (result) => {
        console.log(result);
        alert('Thêm phim thành công');
      },
      error: (er) => {
        console.log(er);
        alert('Thêm không thành công');
      },
    });
  }

  ngOnInit(): void {}
}
