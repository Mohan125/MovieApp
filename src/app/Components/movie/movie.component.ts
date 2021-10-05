import { SharedDataService } from 'src/app/Services/shared-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetMovieByNameService } from 'src/app/Services/get-movie-by-name.service';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { MovieService } from 'src/app/Services/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  name: any;
  movie: any = 2;
  isAdmin: any = 0;
  loggedIn = false;
  favAdded: any = 0;
  alreadyAdded: any = 0;

  constructor(
    private getMovieByName: GetMovieByNameService,
    private activatedRoute: ActivatedRoute,
    private user: SharedDataService,
    private router: Router,
    private fav: FavoriteService,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    
    this.activatedRoute.queryParams.subscribe((params) => {
      this.name = params.title;
    });

    this.getMovieByName.GetMovieByName(this.name).subscribe((data) => {
      this.movie = data;
    });

    if (this.user.User != null) {
      this.loggedIn = true;
    }

    this.isAdmin = this.user.User.isAdmin;
  }
  public editForm(movieName: string) {
    this.router.navigate(['movies/movie/edit'], {
      queryParams: { title: movieName },
    });
  }

  public deleteMovie(movieName:string){
    this.movieService.deleteMovie(movieName).subscribe(data => {this.router.navigate(['movies'])})
  }


  public addFavorite(movieTitle: string) {
    let object = { userName: this.user.User.userName, title: movieTitle };
    this.fav.addFavorite(object).subscribe((data) => {
      if (data != null) {
        this.favAdded = true;
      }
      if (data == null) {
        this.favAdded = false;
        this.alreadyAdded = true;
      }
    });
  }
  public showFavorite() {
    this.router.navigate(['favorite']);
  }
}
