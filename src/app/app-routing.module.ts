import { AccountComponent } from './Components/account/account.component';
import { HomeComponent } from './Components/home/home.component';
import { SignupComponent } from './Components/signup/signup.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMovieComponent } from './Components/edit-movie/edit-movie.component';
import { LoginComponent } from './Components/login/login.component';
import { MovieComponent } from './Components/movie/movie.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';

const routes: Routes = [{ path: '', component: HomeComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'movies', component: MoviesComponent },
                        { path: 'addMovie', component:AddMovieComponent },
                        { path: 'account', component: AccountComponent },
                        { path: 'favorite', component: FavoriteComponent },
                        { path: 'signup', component: SignupComponent },
                        { path: 'movies/movie', component: MovieComponent },
                        { path: 'movies/movie/edit', component: EditMovieComponent },
                        { path: 'movies/movie/title:', component: MovieComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
