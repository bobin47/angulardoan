import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { UserComponent } from './user/user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ThemphimComponent } from './themphim/themphim.component';

const mater = [MatButtonModule, MatIconModule];

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'user', component: UserComponent },
      { path: 'movie', component: MovieComponent },
    ],
  },
];

@NgModule({
  declarations: [AdminComponent, MovieComponent, UserComponent, ThemphimComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    mater,
  ],
})
export class AdminModule {}
