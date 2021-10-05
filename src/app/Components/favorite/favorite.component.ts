import { Component, OnInit } from '@angular/core';
import { FavoriteService } from 'src/app/Services/favorite.service';
import { SharedDataService } from 'src/app/Services/shared-data.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  movies: any;
  constructor(private fav: FavoriteService, private user: SharedDataService) {}

  ngOnInit(): void {
    this.fav.getAllFavorite(this.user.User.userName).subscribe((data) => {
      this.movies = data;
    });
  
  }

  removeFavorite(movieTitle: any) {
    let object = { userName: this.user.User.userName, title: movieTitle };

    this.fav.removeFavorite(object).subscribe((datas) => {
      this.fav.getAllFavorite(this.user.User.userName).subscribe((data) => {
        this.movies = data;
      });
    });
  }
}
