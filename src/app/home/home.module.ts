import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { CarouselComponent } from './carousel/carousel.component';
import { PhimComponent } from './phim/phim.component';
import { TrangchitietComponent } from './trangchitiet/trangchitiet.component';
import { PipeModule } from '../pipe/pipe.module';
import { LichChieuComponent } from './lich-chieu/lich-chieu.component';
import { DatveComponent } from './datve/datve.component';
import { GheComponent } from './ghe/ghe.component';
import { MatIconModule } from '@angular/material/icon';

import { DangdangkyComponent } from './dangdangky/dangdangky.component';
import { TrangdangnhapComponent } from './trangdangnhap/trangdangnhap.component';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { GheNgoiComponent } from './ghe-ngoi/ghe-ngoi.component';

const mater = [
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatTableModule,
];

const routes: Routes = [
  //khi 1 component có children thì file html của component đó phải gắn router vào\
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: HomePageComponent },
      { path: 'chitiet/:id', component: TrangchitietComponent },
      { path: 'datve/:maLichChieu', component: DatveComponent },
      { path: 'dangky', component: DangdangkyComponent },
      { path: 'dangnhap', component: TrangdangnhapComponent },
    ],
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,

    HomePageComponent,
    CarouselComponent,
    PhimComponent,
    TrangchitietComponent,
    LichChieuComponent,
    DatveComponent,
    GheComponent,

    DangdangkyComponent,
    TrangdangnhapComponent,
    FooterComponent,
    GheNgoiComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    mater,
    PipeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
