import { Component, OnInit } from '@angular/core';
import { Movie } from '../../core/models/movie';
import { MovieService } from '../../core/service/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  public DanhSachPhim: Movie[] = [];
  public static: boolean = true;

  private subscriptionDSP: Subscription;

  HienPhimDangChieu() {
    this.static = true;
  }

  HienPhimSapChieu() {
    this.static = false;
  }

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscriptionDSP = this.movieService.layDanhSachPhim().subscribe({
      next: (result) => {
        this.DanhSachPhim = result;
        console.log(this.DanhSachPhim);
      },
    });
  }
}
