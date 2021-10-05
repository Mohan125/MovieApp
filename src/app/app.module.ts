import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { MoviesComponent } from './Components/movies/movies.component';
import { MovieComponent } from './Components/movie/movie.component';
import { EditMovieComponent } from './Components/edit-movie/edit-movie.component';
import { FavoriteComponent } from './Components/favorite/favorite.component';
import { SignupComponent } from './Components/signup/signup.component';
import { HomeComponent } from './Components/home/home.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { AccountComponent } from './Components/account/account.component';
import { AddMovieComponent } from './Components/add-movie/add-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MoviesComponent,
    MovieComponent,
    EditMovieComponent,
    FavoriteComponent,
    SignupComponent,
    HomeComponent,
    NavBarComponent,
    AccountComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
